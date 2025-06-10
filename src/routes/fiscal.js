const { Router } = require('express');
const { createFiscal } = require('../controllers/');

const router = Router();

router.post('/', createFiscal);