import { 
    obtenerCategorias, 
    crearCategoria, 
    actualizarCategoria, 
    eliminarCategoria 
} from '../api/consumApi.js';

// ============================================
// OBTENER Y MOSTRAR CATEGORÍAS
// ============================================
const getCategorias = async () => {
    try {
        console.log('📡 Iniciando carga de categorías...');
        const categorias = await obtenerCategorias();
        console.log('📦 Categorías obtenidas:', categorias);
        
        if (Array.isArray(categorias) && categorias.length > 0) {
            console.log('✅ Mostrando', categorias.length, 'categorías');
            mostrarCategorias(categorias);
        } else {
            console.warn('⚠️ No se encontraron categorías');
            mostrarMensajeVacio();
        }
    } catch (error) {
        console.error('❌ Error en getCategorias:', error);
        mostrarMensajeVacio();
    }
};

// ============================================
// MOSTRAR CATEGORÍAS EN LA TABLA
// ============================================
const mostrarCategorias = (categorias) => {
    const tbody = document.querySelector('#categoriasTable');
    tbody.innerHTML = ''; // Limpiar tabla
    
    categorias.forEach((categoria) => {
        const { id_categoria, nombre_categoria, descripcion, imagen } = categoria;
        
        // Crear fila
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${id_categoria}</td>
            <td><strong>${nombre_categoria}</strong></td>
            <td>${descripcion || 'Sin descripción'}</td>
            <td>
                <img src="images/${imagen || 'default.png'}" alt="${nombre_categoria}" 
                     class="img-thumbnail" width="80" height="80" style="object-fit: cover;">
            </td>
            <td class="text-center">
                <button class="btn btn-info btn-sm" onclick="verDetalles(${id_categoria})" title="Ver detalles">
                    👁️
                </button>
                <button class="btn btn-warning btn-sm" onclick="editarCategoria(${id_categoria})" title="Editar">
                    ✏️
                </button>
                <button class="btn btn-danger btn-sm" onclick="eliminarCategoriaConfirm(${id_categoria})" title="Eliminar">
                    🗑️
                </button>
            </td>
        `;
        
        tbody.appendChild(fila);
    });
};

// ============================================
// MOSTRAR MENSAJE DE TABLA VACÍA
// ============================================
const mostrarMensajeVacio = () => {
    const tbody = document.querySelector('#categoriasTable');
    tbody.innerHTML = `
        <tr>
            <td colspan="5" class="text-center text-muted">
                <p class="my-5">📭 No hay categorías registradas</p>
            </td>
        </tr>
    `;
};

// ============================================
// VER DETALLES DE CATEGORÍA
// ============================================
window.verDetalles = async (id) => {
    alert(`Ver detalles de categoría ID: ${id} (Próximamente)`);
};

// ============================================
// EDITAR CATEGORÍA
// ============================================
window.editarCategoria = async (id) => {
    alert(`Editar categoría ID: ${id} (Próximamente)`);
};

// ============================================
// ELIMINAR CATEGORÍA CON CONFIRMACIÓN
// ============================================
window.eliminarCategoriaConfirm = async (id) => {
    if (confirm('⚠️ ¿Está seguro de que desea eliminar esta categoría?')) {
        await eliminarCategoriaFunc(id);
    }
};

// ============================================
// FUNCIÓN PARA ELIMINAR
// ============================================
const eliminarCategoriaFunc = async (id) => {
    try {
        const resultado = await eliminarCategoria(id);
        console.log('🗑️ Resultado de eliminación:', resultado);
        
        if (resultado && resultado.success) {
            alert('✅ Categoría eliminada correctamente');
            getCategorias(); // Actualizar tabla
        } else {
            alert('❌ Error al eliminar la categoría: ' + (resultado?.message || 'Error desconocido'));
        }
    } catch (error) {
        console.error('❌ Error:', error);
        alert('❌ Error al eliminar la categoría: ' + error.message);
    }
};

// ============================================
// GUARDAR NUEVA CATEGORÍA
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Cargar categorías al cargar la página
    getCategorias();
    
    // Evento del botón Guardar
    const btnGuardar = document.getElementById('btnGuardarCategoria');
    if (btnGuardar) {
        btnGuardar.addEventListener('click', async () => {
            const nombre = document.getElementById('nombreCategoria').value;
            const descripcion = document.getElementById('descripcionCategoria').value;
            
            if (!nombre.trim()) {
                alert('⚠️ Por favor ingrese el nombre de la categoría');
                return;
            }
            
            try {
                console.log('📝 Intentando crear categoría:', nombre);
                const resultado = await crearCategoria(nombre, descripcion);
                console.log('📦 Resultado:', resultado);
                
                if (resultado && resultado.success) {
                    alert('✅ Categoría creada correctamente');
                    
                    // Limpiar formulario
                    document.getElementById('formRegistrarCategoria').reset();
                    
                    // Cerrar modal
                    const modalElement = document.getElementById('modalRegistrarCategoria');
                    const modal = bootstrap.Modal.getInstance(modalElement);
                    if (modal) modal.hide();
                    
                    // Actualizar tabla
                    getCategorias();
                } else {
                    alert('❌ Error al crear la categoría: ' + (resultado?.message || 'Error desconocido'));
                }
            } catch (error) {
                console.error('❌ Error:', error);
                alert('❌ Error al crear la categoría: ' + error.message);
            }
        });
    }
});
