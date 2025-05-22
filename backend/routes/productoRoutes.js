import express from 'express';
import { obtenerproductos,crearproductos } from '../controllers/productoController.js';

const router = express.Router();

router.get('/', obtenerproductos);
router.post( '/', crearproductos );

export default router;