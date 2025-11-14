# 🚀 GUÍA DE INSTALACIÓN Y USO - FRONTEND

## 📋 Requisitos Previos

1. ✅ **Backend corriendo** en `http://localhost:5000`
2. ✅ **Base de datos importada** en phpMyAdmin
3. ✅ **Node.js instalado** (para npm, si usas servidor local)
4. ✅ **Navegador web moderno** (Chrome, Firefox, Edge, Safari)

---

## ⚙️ PASO 1: Verificar que el Backend esté Corriendo

### En la carpeta backend:

```cmd
cd backend
npm install
npm run dev
```

**Resultado esperado:**
```
✓ Conexión a base de datos exitosa
The company web server is running on port 5000
```

**Prueba en el navegador:**
```
http://localhost:5000/api/categorias
```

Deberías ver un JSON con las categorías.

---

## ⚙️ PASO 2: Abrir el Frontend

### Opción A: Abrir HTML directamente (Más Simple)

1. Ve a la carpeta: `frontend/`
2. Haz doble clic en `index.html`
3. Se abrirá en tu navegador predeterminado

**Ventaja:** No necesitas instalar nada
**Desventaja:** Algunos navegadores pueden tener restricciones con módulos

---

### Opción B: Usar Servidor Local (Recomendado)

#### Con http-server:

```cmd
# Instalar globalmente (una sola vez)
npm install -g http-server

# En la carpeta del proyecto
cd c:\xampp\htdocs\60%_3corte\frontend
http-server
```

Luego abre: `http://localhost:8080`

#### Con Live Server (VS Code):

1. Instala la extensión "Live Server" en VS Code
2. Haz clic derecho en `index.html`
3. Selecciona "Open with Live Server"

---

## ⚙️ PASO 3: Acceder a la Aplicación

Una vez abierto el frontend, deberías ver:

```
┌─────────────────────────────────────────┐
│  Sistema de Inventario                  │
├─────────────────────────────────────────┤
│ 📦 Categorías                            │
│ 📦 Productos                            │
│ 👥 Clientes                             │
│ 🏭 Proveedores                          │
│ 💼 Empleados                            │
│ 📄 Facturas                             │
│                     ➕ Crear Categoría  │
├─────────────────────────────────────────┤
│ #  │ Nombre │ Descripción │ Imagen │ Acciones
│ 1  │ Panes  │ Productos... │ [IMG]  │ 👁️ ✏️ 🗑️
│ 2  │ Carnes │ Productos... │ [IMG]  │ 👁️ ✏️ 🗑️
│ ... ...
└─────────────────────────────────────────┘
```

---

## ✅ PRUEBAS DE FUNCIONALIDAD

### Test 1: Listar Categorías (GET)

✅ Al cargar la página, debería mostrarse la tabla con todas las categorías  
✅ Cada fila debe mostrar: ID, Nombre, Descripción, Imagen  
✅ Debes ver los 10 iconos de categorías

---

### Test 2: Crear Categoría (POST)

1. Haz clic en botón **"➕ Crear Categoría"**
2. Rellena el formulario:
   - Nombre: `Bebidas`
   - Descripción: `Bebidas variadas`
3. Haz clic en **"Guardar Categoría"**

✅ Debe aparecer un alert: `✅ Categoría creada correctamente`
✅ El modal debe cerrarse
✅ La tabla debe actualizarse con la nueva categoría

---

### Test 3: Eliminar Categoría (DELETE)

1. En la fila de una categoría, haz clic en botón **"🗑️"**
2. Confirma el alert de confirmación

✅ Debe aparecer un alert: `✅ Categoría eliminada correctamente`
✅ La tabla debe actualizarse sin la categoría eliminada

---

### Test 4: Consola del Navegador

Abre la consola (F12 o Ctrl+Shift+K) y deberías ver logs como:

```
✅ Categoría creada exitosamente
✅ Categoría eliminada exitosamente
```

---

## 🐛 SOLUCIÓN DE PROBLEMAS

### ❌ Error: "Cannot GET /api/categorias"

**Causa:** El backend no está corriendo

**Solución:**
```cmd
cd backend
npm install
npm run dev
```

---

### ❌ Error: "CORS policy has blocked"

**Causa:** El backend no tiene CORS habilitado

**Solución:** En `backend/src/app.js`:

```javascript
import cors from 'cors';
app.use(cors());
```

Luego reinicia:
```cmd
npm run dev
```

---

### ❌ Error: "Failed to fetch"

**Causa:** URL incorrecta o backend no disponible

**Solución:** Verifica en `frontend/api/consumApi.js`:

```javascript
const BASE_URL = 'http://localhost:5000/api'; // ✅ Debe ser así
```

---

### ❌ La tabla está vacía

**Causa:** No hay categorías en la base de datos

**Solución:** Importa el archivo SQL:

```bash
cd backend
# En phpMyAdmin: Import SQL_INVENTARIO.sql
```

---

### ❌ Las imágenes no se muestran

**Causa:** Las imágenes no están en la carpeta `frontend/images/`

**Solución:** Crea imágenes con estos nombres en `frontend/images/`:

```
panes.jpg
carnes.jpg
condimentos.jpg
confites.jpg
quesos.jpg
mariscos.jpg
frutas.jpg
verduras.jpg
bebidas.jpg
lacteos.jpg
```

O usa imágenes de placeholder online editando `consumApi.js`.

---

## 📱 VISTA RESPONSIVA

La aplicación se adapta automáticamente a:

- 📱 **Móvil**: Menú adaptado, tabla horizontal con scroll
- 💻 **Tablet**: Layout con 2 columnas
- 🖥️ **Desktop**: Layout completo de 3+ columnas

---

## 🔐 SEGURIDAD

⚠️ **Importante:**

- No compartas credenciales en el código
- Las variables sensibles van en `.env`
- El frontend nunca debe exponer contraseñas de BD

---

## 📚 ESTRUCTURA DE ARCHIVOS

```
frontend/
├── index.html                 # Página HTML principal
├── README.md                  # Documentación del frontend
├── GUIA_INSTALACION.md       # Este archivo
│
├── css/
│   └── estilos.css           # Estilos personalizados
│
├── js/
│   └── inventario.js         # Lógica principal de la aplicación
│
├── api/
│   └── consumApi.js          # Funciones HTTP (GET, POST, PUT, DELETE)
│
└── images/                    # Carpeta para imágenes
    ├── panes.jpg
    ├── carnes.jpg
    ├── condimentos.jpg
    ├── confites.jpg
    ├── quesos.jpg
    ├── mariscos.jpg
    ├── frutas.jpg
    ├── verduras.jpg
    ├── bebidas.jpg
    └── lacteos.jpg
```

---

## 🎯 RESUMEN DE PASOS

| Paso | Acción | Comando/Ubicación |
|------|--------|-------------------|
| 1️⃣ | Iniciar Backend | `cd backend && npm run dev` |
| 2️⃣ | Abrir Frontend | `http://localhost:8080` |
| 3️⃣ | Ver Categorías | La tabla se carga automáticamente |
| 4️⃣ | Crear Categoría | Click en "➕ Crear Categoría" |
| 5️⃣ | Eliminar Categoría | Click en "🗑️" de la fila |
| 6️⃣ | Ver Consola | F12 → Console |

---

## 🎉 ¡Éxito!

Si completaste todos los pasos y ves la tabla con categorías, ¡todo está funcionando correctamente! 

### Próximas entregas:
- ✅ GET categorías
- ✅ POST crear categorías
- ✅ DELETE eliminar categorías
- ⏳ PUT editar categorías
- ⏳ Productos
- ⏳ Clientes
- ⏳ Proveedores

---

**¿Preguntas? Revisa el archivo `README.md` del backend o verifica los logs en la consola (F12).**

**¡Happy coding! 🚀**
