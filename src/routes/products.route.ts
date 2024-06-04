import express from 'express';
import insertProductController from '../controllers/products.controller';

const router = express.Router();

router.post('/', insertProductController);

export default router;