import { Request, Response } from 'express';
import MongoDBHelper from '../helpers/mongo.helper';
import paginate from 'jw-paginate';

import axiosCountries, { AxiosRequestConfig } from 'axios';

const headers: any = {
    "Content-Type": "application/json",
    "Accept": "application/json"
};

export default() => {

    const _mongoDB = () => {
        return MongoDBHelper.getInstance();
    };

    const _paginate = async (req: Request) => {
        const { pageNumber, pageSize, criterio } = req.body; // GET req.params
        const skips: number = parseInt(pageSize) * (parseInt(pageNumber) - 1); 
        const search = new RegExp(criterio, 'mi');
        
        const total = await _mongoDB().db.collection('c_products').find({productName: search}).count();
        const data:any = await _mongoDB().db.collection('c_products').find({productName: search}).skip(skips).limit(parseInt(pageSize)).toArray();
        const pager: any = paginate(total, parseInt(pageNumber), parseInt(pageSize), 5);

        return { data, pager };
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
        getAll: async (req: Request, res: Response) => {
            // Todos los registros paginados
            const result: any = await _paginate(req);
            res.status(200).json(result);
        },
        getCountries: async (req: Request, res: Response) => {

            const { region } = req.body;

            // OPCION 1
            // const result: any = await axiosCountries.get(`https://restcountries.com/v3.1/region/${region}`)
            // .then((res: any) => { 
            //     return { ok: true, data: res.data };
            // })
            // .catch((err: any) => { 
            //     return { ok: false, err }
            // });

            // OPCION 2
            const options: AxiosRequestConfig = {
                method: "GET",
                baseURL: "https://restcountries.com/v3.1",
                url: `/region/${region}`,
                headers
            };

            const result: any = await axiosCountries.request(options)
                .then((res: any) => { 
                    return { ok: true, data: res.data };
                })
                .catch((err: any) => { 
                    return { ok: false, err }
                });

            res.status(result.ok ? 200 : 500).json({ok: result.ok, msg: result.ok ? 'Llamada a API REST de forma correcta !!!' : 'Ocurrio un error', data: result.ok ? result.data : result.err });       
        },
        newProduct: async(req: Request, res: Response) => {
            // Recuperar los datos 
            const {
                productId, 
                productCode,
                productName,
                productCategory,
                productTags,
                productStock,
                productMinStock,
                productMaxStock
            } = req.body;
        
            // mockProduct.push(req.body)

            const result: any = await _mongoDB().db.collection('c_products')
                .insertOne(req.body)
                .then((res: any) => { 
                    return { ok: true, res };
                })
                .catch((err: any) => { 
                    return { ok: false, err }
                });

            res.status(result.ok ? 200 : 500).json({ok: result.ok, msg: result.ok ? 'Producto insertado de forma correcta !!!' : 'Ocurrio un error', data: result.ok ? result.res : result.err });   
        }
    }
}