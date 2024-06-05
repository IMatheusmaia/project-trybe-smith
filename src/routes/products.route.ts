import express from 'express';
import insertProductController from '../controllers/insertProduct.controller';
import getAllProductsController from '../controllers/getAllProducts.controller';
import productValidation from '../middleware/product.validation';

const router = express.Router();

router.get('/', getAllProductsController);

router.post('/', productValidation, insertProductController);

export default router;