import { Router } from 'express';
import { testing, getProductByID, newProduct } from '../controllers/product.controller';

const router = Router();

// ---------- End Point ------------ --- Metodo --- 
// http://localhost:3000/v1/products/getProductByID
router.get('/testing', testing);
router.get('/getProductByID/:id', getProductByID);

router.post('/newProduct', newProduct);

export default router;