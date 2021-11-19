import express from 'express';
import cors from 'cors';

import MongoHelper from './helpers/mongo.helper';
import ProductRoute from './routes/product.route';
import ENV from './environmets/env.dev';

const app = express();

// Principal
(async () => {

    // Mostrar Entorno de Ejecucion
    console.log('Mostramos entorno de ejecucion: ', process.env.NODE_ENV);

    // Intentamos establecer conexiion con la base de datos
    const mongodb: any = MongoHelper.getInstance(ENV);
    await mongodb.connect();

    // Middlewares
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(cors());
    app.use('/v1/products', ProductRoute);

    app.listen(3000, () => {
        console.log('Servidor Express funcionando correctamente !!!');
    });

})();