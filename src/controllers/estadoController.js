const { createEstadoService, listEstadosService } = require('../services/estadoService');

const createEstado = async(req, res)=> {
    const { nombre } = req.body;

    try {
        const newEstado = await createEstadoService(nombre);
        res.status(201).json(newEstado);
    } catch (error) {
        res.status(500).json({error: 'Error no se pudo crear el estado'})
    }
};

const listEstados = async(req,res) => {
    try {
        const estados = await listEstadosService();
        res.json(estados);
    } catch (error) {
        res.status(500).json({error: 'No se puedieron obtener los estados'});
    }
};

module.exports = { createEstado, listEstados }