require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs')
const { PrismaClient } = require('./prisma/generated/prisma')
const jwt = require('jsonwebtoken')

//orm 
const prisma = new PrismaClient();

const fs = require('fs');
const path = require('path');
const fiscalesFilePath = path.join(__dirname, 'fiscales.json');

const LoggerMiddleware = require('./middlewares/logger');
const authenticateToken = require('./middlewares/auth');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))
app.use(LoggerMiddleware)
const PORT = process.env.PORT || 3000;



app.post('/login', async(req, res) => {
    const { email, password } = req.body;

    const user = await prisma.fiscal.findUnique({where: {email}});
    if(!user) return res.status(400).json({error: 'Correo y/o password es invalido'});
    const validPassword = await bcrypt.compare(password, user.password);

    if(!validPassword) return res.status(400).json({error: 'Correo y/o password es invalido'});

    const token = jwt.sign({id:user.id, nombre: user.nombre}, process.env.JWT_SECRET, {expiresIn: '24h'})

    res.json({token: token})

});


app.get('/protegida', authenticateToken, (req,res) => {
    res.send('Esa es una ruta protegida')
})
app.post('/fiscal', async(req,res) => {
    const {nombre, email, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const nuevoFiscal = await prisma.fiscal.create({
        data: {
            nombre,
            email,
            password: hashedPassword
        }
    });
    res.status(201).json({info: 'El Fiscal fue registrado correctamente'})
})

app.get('/fiscales', async (req, res) => {
  try {
    const fiscalesRaw = await prisma.fiscal.findMany();
   const fiscales = fiscalesRaw.map(({ password, ...rest }) => rest);
    res.json(fiscales);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en la conexión con la DB' });
  }
});
app.get('/documentos', async (req, res) => {
  try {
    const documentos = await prisma.expediente.findMany();
    res.json(documentos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en la conexión con la DB' });
  }
});
app.get('/', (req, res) => {
    res.send(
        `<h1>Sistema de administracion de archivos del MP</h1>`
    )
})

app.get('/fiscales/:id', (req, res) => {
    const fiscalId = req.params.id;
    res.send({
        fiscalId: fiscalId,
        nombre: 'Kerinson Armando García Chinchilla',
        cargo: 'Fiscal Delitos Informáticos',
        email: 'krgarciac@mp.gob.gt'
    })
})

app.get('/fiscales',(req, res) =>{
    fs.readFile(fiscalesFilePath, 'utf-8', (err, data) => {
        if(err){
            return res.status(500).json({error: 'Error en la conexion de datos'})
        }
        const fiscales = JSON.parse(data);
        res.json(fiscales)
    })
});

app.post('/fiscales', (req, res) => {
    const newFiscal = req.body;
    fs.readFile(fiscalesFilePath, 'utf-8', (error, data) => {
        if(error){
            return res.status(500).json({error: 'Error con conexion de datos.'});
        }
        const fiscales = JSON.parse(data);
        fiscales.push(newFiscal);
        fs.writeFile(fiscalesFilePath, JSON.stringify(fiscales, null, 2), (error) => {
        if(error){
            return res.status(200).json({error: 'Error al guardar el usuario'})
        }
        res.status(201).json(newFiscal)
    })
    });
    
});

app.put('/fiscales/:id', (req, res) => {
    const fiscalId = parseInt(req.params.id, 10);
    const actualizarFiscal = req.body;

    fs.readFile(fiscalesFilePath, 'utf-8', (error, data)=> {
        if(error){
            return res.status(500).json({error:'Error con conexion de datos.'})
        }
        let fiscales = JSON.parse(data);
        fiscales = fiscales.map(fiscal => (fiscal.fiscalId === fiscalId ? {...fiscal, ...actualizarFiscal}: fiscal));
        fs.writeFile(fiscalesFilePath, JSON.stringify(fiscales, null, 2), (error) => {
            if(error){
                return res
                       .status(500)
                       .json({error: 'Error al actualizar el usuario'})
            }
            res.json(actualizarFiscal)
        })
    })
});


app.get('/error', (req, res, next) => {
    next(new Error('Error intencional'))
})

app.listen(PORT, () => {
    console.log(`ADMINISTRACIÓN DE DOCUMENTOS MP http://localhost:${PORT}`);
})