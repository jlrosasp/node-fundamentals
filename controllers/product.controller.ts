import { Request, Response } from 'express';

// Definimos datos a manera de ejemplo
let mockProduct: any = [
    {
        productId: '1261',
        productCode: 'SM-9897-J',
        productName: 'Disco Duro',
        productCategory: 'Storage',
        productTags: ['storage', 'almacenamiento', 'nas', 'etc'],
        productStock: 45,
        productMinStock: 20,
        productMaxStock: 50
    },
    {
        productId: '1657',
        productCode: 'AA-6565-H',
        productName: 'Memoria USB 16GB',
        productCategory: 'Storage',
        productTags: ['storage', 'almacenamiento', 'nas', 'etc'],
        productStock: 5,
        productMinStock: 5,
        productMaxStock: 10
    },
    {
        productId: '8989',
        productCode: 'BN-9889-Z',
        productName: 'Mouse',
        productCategory: 'Perifericos',
        productTags: ['mouse', 'raton'],
        productStock: 16,
        productMinStock: 10,
        productMaxStock: 20
    }
]

export const testing = async (req: Request, res: Response) => {
    res.status(200).json({
        ok: true,
        msg: 'Route Product Work...'
    });
};

export const getProductByID = async (req: Request, res: Response) => {
    // Recuperamos el id desde la URL
    const { id } = req.params;
    
    // Buscar Producto por ID
    const result: any = mockProduct.find((item:any) => item.productId == id );
    // Devolvemos Respuesta al Navegador
    res.status(200).json(result);
}

export const newProduct = async(req: Request, res: Response) => {
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

    mockProduct.push(req.body)

    res.status(200).json({ok: true, msg: 'Producto insertado de forma correcta !!!'});   
}