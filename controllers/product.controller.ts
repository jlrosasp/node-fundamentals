import { Request, Response } from 'express';

import MongoDBHelper from '../helpers/mongo.helper';

export default() => {

    const _mongoDB = () => {
        return MongoDBHelper.getInstance();
    };

    return {
        testing: async (req: Request, res: Response) => {
            res.status(200).json({
                ok: true,
                msg: 'Route Product Work...'
            });
        },
        getProductByID: async (req: Request, res: Response) => {
            // Recuperamos el id desde la URL
            const { id } = req.params;
            
            // Buscar Producto por ID
            const result: any = await _mongoDB().db.collection('c_products').findOne({productId: id})
            // Devolvemos Respuesta al Navegador
            res.status(200).json(result);
        },
        newProduct: async(req: Request, res: Response) => {
            // Recuperar los datos 
            // const {
            //     productId, 
            //     productCode,
            //     productName,
            //     productCategory,
            //     productTags,
            //     productStock,
            //     productMinStock,
            //     productMaxStock
            // } = req.body;
        
            // mockProduct.push(req.body)
        
            res.status(200).json({ok: true, msg: 'Producto insertado de forma correcta !!!'});   
        }
    }
}