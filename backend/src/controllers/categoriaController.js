import {
  getAllCategorias,
  getCategoria,
  createCategoria,
  updateCategoria,
  deleteCategoria
} from '../db/categoriaModel.js';

// GET - Obtener todas las categorías
export const getCategorias = async (req, res) => {
  try {
    const categorias = await getAllCategorias();
    res.status(200).json({
      success: true,
      message: 'Categorías obtenidas correctamente',
      data: categorias
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// GET - Obtener una categoría por ID
export const getCategoriaById = async (req, res) => {
  try {
    const { id } = req.params;
    const categoria = await getCategoria(id);
    
    if (!categoria) {
      return res.status(404).json({
        success: false,
        message: 'Categoría no encontrada'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Categoría obtenida correctamente',
      data: categoria
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// POST - Crear una nueva categoría
export const postCategoria = async (req, res) => {
  try {
    const { nombre_categoria, descripcion } = req.body;
    
    // Validación
    if (!nombre_categoria) {
      return res.status(400).json({
        success: false,
        message: 'El nombre de la categoría es requerido'
      });
    }
    
    const result = await createCategoria(nombre_categoria, descripcion || null);
    
    res.status(201).json({
      success: true,
      message: 'Categoría creada correctamente',
      data: {
        id_categoria: result.insertId,
        nombre_categoria,
        descripcion: descripcion || null
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// PUT - Actualizar una categoría
export const putCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre_categoria, descripcion } = req.body;
    
    // Validación
    if (!nombre_categoria) {
      return res.status(400).json({
        success: false,
        message: 'El nombre de la categoría es requerido'
      });
    }
    
    // Verificar que la categoría existe
    const categoria = await getCategoria(id);
    if (!categoria) {
      return res.status(404).json({
        success: false,
        message: 'Categoría no encontrada'
      });
    }
    
    const result = await updateCategoria(id, nombre_categoria, descripcion || null);
    
    res.status(200).json({
      success: true,
      message: 'Categoría actualizada correctamente',
      data: {
        id_categoria: id,
        nombre_categoria,
        descripcion: descripcion || null
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// DELETE - Eliminar una categoría
export const deleteCategoria_Controller = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Verificar que la categoría existe
    const categoria = await getCategoria(id);
    if (!categoria) {
      return res.status(404).json({
        success: false,
        message: 'Categoría no encontrada'
      });
    }
    
    const result = await deleteCategoria(id);
    
    res.status(200).json({
      success: true,
      message: 'Categoría eliminada correctamente',
      data: { id_categoria: id }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
