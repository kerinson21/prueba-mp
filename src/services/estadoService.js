const { PrismaClient } = require('./prisma/generated/prisma');

const prisma = new PrismaClient();


const createEstadoService = async (nombre) => {
    const newEstado = await prisma.EstadoExpediente.create({
        data: {
            nombre: nombre
        }
    });
    return newEstado;
}

const listEstadosService = async() => {
    const estados = await prisma.EstadoExpediente.findMany()
    return estados;
}

module.exports = { createEstadoService, listEstadosService }