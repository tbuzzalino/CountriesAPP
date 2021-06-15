const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const activity = require('./activities');
const countries = require('./countries');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/Countries', countries);
router.use('/Activities', activity);


module.exports = router;
