import { Router } from 'express';
import {
  getCategorias,
  getCategoriaById,
  postCategoria,
  putCategoria,
  deleteCategoria_Controller
} from '../controllers/categoriaController.js';

const router = Router();

// Rutas CRUD para categorías
// GET - Obtener todas las categorías
router.get('/', getCategorias);

// GET - Obtener una categoría por ID
router.get('/:id', getCategoriaById);

// POST - Crear una nueva categoría
router.post('/', postCategoria);

// PUT - Actualizar una categoría
router.put('/:id', putCategoria);

// DELETE - Eliminar una categoría
router.delete('/:id', deleteCategoria_Controller);

export default router;
