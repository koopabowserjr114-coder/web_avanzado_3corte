# Frontend - Sistema de Inventario

## 📋 Descripción

Frontend completo para el Sistema de Inventario de Web Avanzado. Aplicación web responsiva que consume la API REST del backend para gestionar categorías de productos.

## 🎯 Características

✅ **Listar Categorías** - Obtiene todas las categorías del backend  
✅ **Crear Categoría** - Modal para registrar nuevas categorías  
✅ **Actualizar Categoría** - Editar información de categorías (próximamente)  
✅ **Eliminar Categoría** - Borrar categorías con confirmación  
✅ **Responsive Design** - Compatible con dispositivos móviles  
✅ **Bootstrap 5.2** - Interfaz moderna y profesional  
✅ **ES Modules** - Código modular y bien organizado  
✅ **Async/Await** - Manejo moderno de promesas  

## 📁 Estructura de Carpetas

```
frontend/
├── index.html                 # Página principal
├── css/
│   └── estilos.css           # Estilos personalizados
├── js/
│   └── inventario.js         # Lógica principal de la aplicación
├── api/
│   └── consumApi.js          # Funciones para consumir la API REST
└── images/                    # Carpeta para imágenes de categorías
```

## 🚀 Configuración Rápida

### 1. **Verificar que el Backend esté corriendo**
```cmd
cd backend
npm run dev
```

### 2. **Abrir el Frontend en el navegador**
- Opción A: Abrir directamente `index.html` en el navegador
- Opción B: Usar un servidor local (http-server, Live Server, etc.)

```cmd
# Usando http-server (si está instalado)
npm install -g http-server
http-server frontend
```

### 3. **Acceder a la aplicación**
```
http://localhost:8080/
```

## 🔌 Conexión con el Backend

El frontend se conecta al backend en: **`http://localhost:5000/api`**

### Endpoints disponibles:

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| **GET** | `/categorias` | Obtener todas las categorías |
| **GET** | `/categorias/:id` | Obtener categoría por ID |
| **POST** | `/categorias` | Crear nueva categoría |
| **PUT** | `/categorias/:id` | Actualizar categoría |
| **DELETE** | `/categorias/:id` | Eliminar categoría |

## 📦 Dependencias

- **Bootstrap 5.2** - Framework CSS
- **Fetch API** - Para HTTP requests
- **ES Modules** - Modularización de código

## 🎨 Componentes Principales

### `index.html`
- Navbar con título de la aplicación
- Sidebar con menú de navegación
- Tabla principal para listar categorías
- Modal para crear/editar categorías

### `api/consumApi.js`
Funciones de comunicación con el backend:
- `obtenerCategorias()` - GET todas
- `obtenerCategoriaPorId(id)` - GET por ID
- `crearCategoria(nombre, descripcion)` - POST
- `actualizarCategoria(id, nombre, descripcion)` - PUT
- `eliminarCategoria(id)` - DELETE

### `js/inventario.js`
Lógica de la aplicación:
- `getCategorias()` - Cargar categorías al iniciar
- `mostrarCategorias(categorias)` - Renderizar tabla dinámicamente
- `verDetalles(id)` - Ver detalles de categoría
- `editarCategoria(id)` - Editar categoría
- `eliminarCategoriaFunc(id)` - Eliminar categoría

### `css/estilos.css`
Estilos personalizados:
- Colores corporativos
- Animaciones y transiciones
- Responsive design
- Hover effects

## 🎯 Flujo de la Aplicación

```
1. Se carga index.html
   ↓
2. Se ejecuta inventario.js (módulo principal)
   ↓
3. Se dispara evento 'DOMContentLoaded'
   ↓
4. Se llama a getCategorias()
   ↓
5. getCategorias() importa consumApi.js y ejecuta obtenerCategorias()
   ↓
6. obtenerCategorias() hace fetch a http://localhost:5000/api/categorias
   ↓
7. Backend retorna JSON con las categorías
   ↓
8. mostrarCategorias() renderiza dinámicamente las filas de la tabla
   ↓
9. Tabla se muestra con todos los datos y botones de acción
```

## ⚡ Cómo Usar

### Listar Categorías
La tabla se carga automáticamente al abrir la página.

### Crear Categoría
1. Haz clic en botón "➕ Crear Categoría"
2. Completa el formulario
3. Haz clic en "Guardar Categoría"
4. La tabla se actualiza automáticamente

### Eliminar Categoría
1. Haz clic en botón "🗑️" de la fila
2. Confirma la acción
3. La categoría se elimina y la tabla se actualiza

### Editar/Detalles
(Próximamente) - Botones implementados para futuras entregas

## 🐛 Solución de Problemas

### Error: CORS blocked
**Solución:** Asegúrate que el backend tiene `cors` instalado y habilitado.

```bash
cd backend
npm install cors
```

Y en `src/app.js`:
```javascript
import cors from 'cors';
app.use(cors());
```

### Error: Cannot GET endpoints
**Solución:** Verifica que el servidor backend esté corriendo en puerto 5000.

```bash
npm run dev
```

### No se cargan las imágenes
**Solución:** Coloca las imágenes de categorías en la carpeta `frontend/images/` con los nombres correspondientes.

## 📝 Notas Importantes

- El frontend usa **ES Modules**, por eso requiere `type="module"` en los scripts HTML
- Todos los fetch son **async/await** para mejor manejo de promesas
- El formulario se limpia automáticamente después de crear una categoría
- Las funciones de editar y eliminar incluyen confirmación del usuario
- La interfaz es completamente **responsive** para móviles

## 🔮 Próximas Mejoras

- [ ] Editar categorías
- [ ] Ver detalles de categoría
- [ ] Búsqueda y filtrado
- [ ] Paginación de tablas
- [ ] Gestión de productos
- [ ] Gestión de clientes y proveedores
- [ ] Reportes

## 📞 Soporte

Para reportar problemas o sugerencias, revisa el archivo `README.md` del backend.

---

**¡Éxito con tu Sistema de Inventario! 🎉**
