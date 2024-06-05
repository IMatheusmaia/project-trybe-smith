import express from 'express';
import loginValidation from '../middleware/login.validation';
import authentication from '../auth/authentication';

const router = express.Router();

router.post('/', loginValidation, authentication);

export default router;