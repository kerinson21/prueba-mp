const { Router} = require('express');
const authRouter = require('./auth');
const fiscalRouter = require('./fiscal');
const estadoRouter = require('./estado')
const router = Router();

router.use('/auth', authRouter);
router.use('/fiscal', fiscalRouter);
router.use('/estado', estadoRouter);


module.exports = router