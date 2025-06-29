require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs')
const { PrismaClient } = require('./prisma/generated/prisma')
const jwt = require('jsonwebtoken')

//orm 
const prisma = new PrismaClient();


const LoggerMiddleware = require('./src/middlewares/logger');
const authenticateToken = require('./src/middlewares/auth');

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

app.post('/fiscal', async(req,res) => {
    const {nombre, email, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.fiscal.create({
        data: {
            nombre,
            email,
            password: hashedPassword
        }
    });
    res.status(201).json({info: 'El Fiscal fue registrado correctamente'})
})

app.get('/fiscales', authenticateToken, async (req, res) => {
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


app.put('/fiscales/:id', (req, res) => {
    
});


app.get('/error', (req, res, next) => {
    next(new Error('Error intencional'))
})

app.listen(PORT, () => {
    console.log(`ADMINISTRACIÓN DE DOCUMENTOS MP http://localhost:${PORT}`);
})