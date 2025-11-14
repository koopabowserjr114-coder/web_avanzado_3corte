// URL base del servidor backend
const BASE_URL = 'http://localhost:5000/api';

// ============================================
// MÉTODO GET - Obtener todas las categorías
// ============================================
export const obtenerCategorias = async () => {
    try {
        const url = `${BASE_URL}/categorias`;
        console.log('🔍 Obteniendo categorías de:', url);
        
        const respuesta = await fetch(url);
        console.log('📊 Respuesta status:', respuesta.status);
        
        if (!respuesta.ok) {
            throw new Error(`Error en la conexión: ${respuesta.status}`);
        }
        
        const datos = await respuesta.json();
        console.log('📦 Datos recibidos:', datos);
        
        // El backend retorna { success: true, data: [...] }
        return datos.data || datos;
    } catch (error) {
        console.error('❌ Error al obtener categorías:', error);
        return [];
    }
};

// ============================================
// MÉTODO GET - Obtener categoría por ID
// ============================================
export const obtenerCategoriaPorId = async (id) => {
    try {
        const url = `${BASE_URL}/categorias/${id}`;
        
        const respuesta = await fetch(url);
        
        if (!respuesta.ok) {
            throw new Error(`Error en la conexión: ${respuesta.status}`);
        }
        
        const datos = await respuesta.json();
        
        return datos.data || datos;
    } catch (error) {
        console.error('❌ Error al obtener categoría:', error);
        return null;
    }
};

// ============================================
// MÉTODO POST - Crear nueva categoría
// ============================================
export const crearCategoria = async (nombre, descripcion) => {
    try {
        const url = `${BASE_URL}/categorias`;
        console.log('📝 Creando categoría:', { nombre, descripcion });
        
        const respuesta = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre_categoria: nombre,
                descripcion: descripcion || ''
            })
        });
        
        console.log('📊 Respuesta status:', respuesta.status);
        
        if (!respuesta.ok) {
            const errorData = await respuesta.json();
            console.error('❌ Error del servidor:', errorData);
            throw new Error(`Error en la conexión: ${respuesta.status}`);
        }
        
        const datos = await respuesta.json();
        console.log('✅ Respuesta del servidor:', datos);
        
        return datos;
    } catch (error) {
        console.error('❌ Error al crear categoría:', error);
        throw error; // Lanzar el error para que lo maneje el inventario.js
    }
};

// ============================================
// MÉTODO PUT - Actualizar categoría
// ============================================
export const actualizarCategoria = async (id, nombre, descripcion) => {
    try {
        const url = `${BASE_URL}/categorias/${id}`;
        
        const respuesta = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre_categoria: nombre,
                descripcion: descripcion || ''
            })
        });
        
        if (!respuesta.ok) {
            throw new Error(`Error en la conexión: ${respuesta.status}`);
        }
        
        const datos = await respuesta.json();
        
        console.log('✅ Categoría actualizada exitosamente');
        return datos;
    } catch (error) {
        console.error('❌ Error al actualizar categoría:', error);
        return null;
    }
};

// ============================================
// MÉTODO DELETE - Eliminar categoría
// ============================================
export const eliminarCategoria = async (id) => {
    try {
        const url = `${BASE_URL}/categorias/${id}`;
        console.log('🗑️ Eliminando categoría ID:', id);
        
        const respuesta = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        console.log('📊 Respuesta status:', respuesta.status);
        
        if (!respuesta.ok) {
            const errorData = await respuesta.json();
            console.error('❌ Error del servidor:', errorData);
            throw new Error(`Error en la conexión: ${respuesta.status}`);
        }
        
        const datos = await respuesta.json();
        console.log('✅ Respuesta del servidor:', datos);
        
        return datos;
    } catch (error) {
        console.error('❌ Error al eliminar categoría:', error);
        throw error;
    }
};
