import express from 'express';
import insertProductController from '../controllers/insertProduct.controller';
import getAllProductsController from '../controllers/getAllProducts.controller';

const router = express.Router();

router.get('/', getAllProductsController);

router.post('/', insertProductController);

export default router;