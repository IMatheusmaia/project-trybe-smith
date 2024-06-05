import express from 'express';
import getAllUsersController from '../controllers/getAllUsers.controller';

const router = express.Router();

router.get('/', getAllUsersController);

export default router;