const LoggerMiddleware = (req, res, next) => {
    const timestamp = new Date().toISOString();

    console.log(`[${timestamp} ${req.method} ${req.url} - IP: ${req.ip}]`);

    const inicio = Date.now();

    res.on('finish', () => {
        const duracion = Date.now() - inicio;
        console.log(`[${timestamp}] Respuesta: ${res.statusCode} - ${duracion}ms`);
    });

    next();
};

module.exports = LoggerMiddleware;