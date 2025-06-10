const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next){
    const token = req.header('Authorization')?.split(' ')[1];

    if(!token){
        return res.status(401).json({error: 'Acceso denegado, no tienes token de acceso'});
    }
    jwt.verify(token, process.env.JWT_SECRET, (error, usuario) => {
        if(error){
            res.status(403).json({error: 'Token invalido'});
        }
        req.user = usuario;
    });

    

    next();
}

module.exports = authenticateToken