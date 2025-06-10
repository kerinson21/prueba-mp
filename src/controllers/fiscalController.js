const { createFiscalService } = require('../services/fiscalServices');

const createFiscal = async(req, res) => {
    const { nombre, email, password } = req.body;
    try {
        const newFiscal = await createFiscalService(nombre, email, password)
    } catch (error) {
        
    }
}