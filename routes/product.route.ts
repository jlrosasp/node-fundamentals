import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const router = Router();
const productCtrl = ProductController();

// ---------- End Point ------------ --- Metodo --- 
// http://localhost:3000/v1/products/getProductByID
router.get('/testing', productCtrl.testing);
router.get('/getProductByID/:id', productCtrl.getProductByID);
router.get('/getAll', productCtrl.getAll);

router.get('/getCountries', productCtrl.getCountries);


router.post('/newProduct', productCtrl.newProduct);

export default router;