# 🚀 Sistema de Inventario - Web Avanzado 3er Corte

Implementación completa de un **Sistema de Inventario** con arquitectura Full Stack usando **Node.js + Express + MySQL + HTML/CSS/JavaScript**.

## ✨ Características

- ✅ **Backend REST API** - Node.js + Express
- ✅ **Base de Datos** - MySQL con 11 tablas
- ✅ **Frontend Responsivo** - HTML5 + CSS3 + JavaScript ES6+
- ✅ **CRUD Completo** - Create, Read, Update, Delete
- ✅ **Autenticación CORS** - Seguridad habilitada
- ✅ **Interfaz Moderna** - Bootstrap 5.2
- ✅ **Documentación Completa** - 30+ archivos

## 📁 Estructura del Proyecto

```
web_avanzado_3corte/
├── backend/                    # Servidor Node.js
│   ├── src/
│   │   ├── controllers/        # Lógica de negocio
│   │   ├── db/                 # Modelos de base de datos
│   │   ├── routes/             # Endpoints
│   │   ├── app.js              # Configuración Express
│   │   ├── config.js           # Conexión MySQL
│   │   └── index.js            # Punto de entrada
│   ├── package.json            # Dependencias
│   ├── .env                    # Variables de entorno
│   └── SQL_INVENTARIO.sql      # Script de base de datos
│
├── frontend/                   # Aplicación web
│   ├── index.html              # Página principal
│   ├── js/
│   │   └── inventario.js       # Lógica de la aplicación
│   ├── css/
│   │   └── estilos.css         # Estilos personalizados
│   ├── api/
│   │   └── consumApi.js        # Cliente HTTP
│   └── images/                 # Carpeta para imágenes
│
├── INICIO_AQUI.md              # 👈 Comienza aquí
├── README_FINAL.md             # Resumen completo
└── (+ 20 archivos de documentación)
```

## 🚀 Inicio Rápido

### 1. Clonar el repositorio

```bash
git clone https://github.com/koopabowserjr114-coder/web_avanzado_3corte.git
cd web_avanzado_3corte
```

### 2. Importar base de datos

- Abre: `http://localhost/phpmyadmin`
- Click en "Import"
- Selecciona: `backend/SQL_INVENTARIO.sql`
- Click en "Go"

### 3. Iniciar Backend

```bash
cd backend
npm install
npm run dev
```

Deberías ver:
```
✓ Conexión a base de datos exitosa
The company web server is running on port 5000
```

### 4. Iniciar Frontend

En otra terminal:

```bash
cd frontend
http-server
```

Luego abre: `http://127.0.0.1:8080`

## 🎯 Endpoints API

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| **GET** | `/api/categorias` | Obtener todas las categorías |
| **GET** | `/api/categorias/:id` | Obtener categoría por ID |
| **POST** | `/api/categorias` | Crear nueva categoría |
| **PUT** | `/api/categorias/:id` | Actualizar categoría |
| **DELETE** | `/api/categorias/:id` | Eliminar categoría |

## 💾 Base de Datos

**Nombre:** `inventario`

**Tablas:**
- categorias
- productos
- clientes
- proveedores
- empleados
- facturas
- detalles_factura
- y más...

## 🛠️ Tecnologías

### Backend
- Node.js
- Express.js
- MySQL2
- CORS
- Nodemon

### Frontend
- HTML5
- CSS3
- JavaScript ES6+
- Bootstrap 5.2
- Fetch API

## 📖 Documentación

- **[INICIO_AQUI.md](INICIO_AQUI.md)** - Guía de inicio rápido
- **[README_FINAL.md](README_FINAL.md)** - Resumen completo
- **[backend/README.md](backend/README.md)** - Documentación del backend
- **[frontend/README.md](frontend/README.md)** - Documentación del frontend

## ✅ Funcionalidades Actuales

- ✅ Listar categorías
- ✅ Crear categorías
- ✅ Eliminar categorías
- ✅ Obtener por ID
- ✅ Tabla dinámica
- ✅ Modal de formulario
- ✅ Responsivo

## 🔄 Próximas Mejoras

- [ ] Editar categorías (PUT)
- [ ] Gestión de productos
- [ ] Gestión de clientes
- [ ] Gestión de proveedores
- [ ] Autenticación JWT
- [ ] Reportes

## 👨‍💻 Autor

**Estudiante:** Web Avanzado - 3er Corte  
**Profesor:** Prof. Vermen  
**Repositorio:** https://github.com/koopabowserjr114-coder/web_avanzado_3corte

## 📄 Licencia

Este proyecto es de uso educativo.

---

**¿Necesitas ayuda?** Lee los archivos `.md` en la carpeta del proyecto o revisa la [Guía de Instalación](frontend/GUIA_INSTALACION.md).

**¡Disfruta tu Sistema de Inventario! 🎉**
