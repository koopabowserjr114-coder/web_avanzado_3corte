import { connection } from '../config.js';

// Obtener todas las categorías
export const getAllCategorias = async () => {
  try {
    const [rows] = await connection.query('SELECT * FROM categorias');
    return rows;
  } catch (error) {
    throw new Error(`Error al obtener categorías: ${error.message}`);
  }
};

// Obtener categoría por ID
export const getCategoria = async (id) => {
  try {
    const [rows] = await connection.query('SELECT * FROM categorias WHERE id_categoria = ?', [id]);
    return rows[0];
  } catch (error) {
    throw new Error(`Error al obtener categoría: ${error.message}`);
  }
};

// Crear nueva categoría
export const createCategoria = async (nombre, descripcion) => {
  try {
    const [result] = await connection.query(
      'INSERT INTO categorias (nombre_categoria, descripcion) VALUES (?, ?)',
      [nombre, descripcion]
    );
    return result;
  } catch (error) {
    throw new Error(`Error al crear categoría: ${error.message}`);
  }
};

// Actualizar categoría
export const updateCategoria = async (id, nombre, descripcion) => {
  try {
    const [result] = await connection.query(
      'UPDATE categorias SET nombre_categoria = ?, descripcion = ? WHERE id_categoria = ?',
      [nombre, descripcion, id]
    );
    return result;
  } catch (error) {
    throw new Error(`Error al actualizar categoría: ${error.message}`);
  }
};

// Eliminar categoría
export const deleteCategoria = async (id) => {
  try {
    const [result] = await connection.query(
      'DELETE FROM categorias WHERE id_categoria = ?',
      [id]
    );
    return result;
  } catch (error) {
    throw new Error(`Error al eliminar categoría: ${error.message}`);
  }
};
