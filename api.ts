import express from 'express';
import cors from 'cors';

import ProductRoute from './routes/product.route';

const app = express();

// Principal
(async () => {

    // Mostrar Entorno de Ejecucion
    console.log('Mostramos entorno de ejecucion: ', process.env.NODE_ENV);

    // Middlewares
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(cors);
    app.use('/v1/products', ProductRoute);

    app.listen(3000, () => {
        console.log('Servidor Express funcionando correctamente !!!');
    });

})();