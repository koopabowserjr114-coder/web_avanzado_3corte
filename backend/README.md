# 🚀 Backend API - Sistema de Inventario

## Descripción
Backend RESTful API construido con Node.js, Express y MySQL para un sistema de gestión de inventario. Sigue la arquitectura MVC con módulos ES6.

## 📋 Características Implementadas

✅ **Servidor Express** - Framework web esencial  
✅ **Módulos ES6** - import/export en lugar de CommonJS  
✅ **Router de Express** - Enrutamiento estructurado  
✅ **Middleware CORS** - Soporte para conexiones externas  
✅ **Base de datos MySQL** - Conexión con pool de conexiones  
✅ **Arquitectura MVC** - Modelos, Vistas y Controladores separados  
✅ **CRUD Completo** - Create, Read, Update, Delete en categorías  
✅ **Nodemon** - Auto-reload en desarrollo  
✅ **Variables de entorno** - Configuración segura con .env  

## 🏗️ Estructura del Proyecto

```
backend/
├── node_modules/           # Dependencias instaladas
├── src/
│   ├── controllers/        # Controladores (lógica de negocio)
│   │   └── categoriaController.js
│   ├── db/                # Modelos de datos (interacción con BD)
│   │   └── categoriaModel.js
│   ├── routes/            # Rutas y endpoints
│   │   └── categorias.routes.js
│   ├── app.js             # Configuración de Express
│   ├── config.js          # Configuración de base de datos
│   └── index.js           # Punto de entrada principal
├── .env                   # Variables de entorno (no versionado)
├── package.json          # Dependencias y scripts
├── SQL_INVENTARIO.sql    # Script SQL de la base de datos
└── README.md             # Este archivo
```

## ⚙️ Configuración Inicial

### 1. Instalar Node.js
Descarga e instala Node.js desde: https://nodejs.org/

### 2. Instalar dependencias
```bash
cd backend
npm install
```

Esto instalará:
- **express** - Framework web
- **mysql2** - Driver MySQL con promesas
- **nodemon** - Auto-reload en desarrollo

### 3. Crear la Base de Datos

#### Opción A: Usando phpMyAdmin (RECOMENDADO)

1. Abre phpMyAdmin: http://localhost/phpmyadmin
2. Haz clic en "Importar"
3. Selecciona el archivo `SQL_INVENTARIO.sql`
4. Haz clic en "Continuar"

#### Opción B: Usando línea de comandos MySQL

```bash
mysql -u root -p < SQL_INVENTARIO.sql
```

### 4. Configurar variables de entorno

Edita el archivo `.env`:

```
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=inventario
PORT=5000
```

**Nota:** Si tu MySQL tiene contraseña, añádela en `DB_PASSWORD`

### 5. Iniciar el servidor

Modo desarrollo (con auto-reload):
```bash
npm run dev
```

Modo producción:
```bash
npm start
```

El servidor estará disponible en: **http://localhost:5000**

## 📡 Endpoints API

### Base URL
```
http://localhost:5000/api
```

### Categorías

#### GET - Obtener todas las categorías
```
GET /categorias
```

**Respuesta exitosa:**
```json
{
  "success": true,
  "message": "Categorías obtenidas correctamente",
  "data": [
    {
      "id_categoria": 1,
      "nombre_categoria": "Electrónica",
      "descripcion": "Productos electrónicos y computadoras"
    }
  ]
}
```

#### GET - Obtener categoría por ID
```
GET /categorias/:id
```

Ejemplo:
```
GET /categorias/1
```

#### POST - Crear nueva categoría
```
POST /categorias
```

**Body (JSON):**
```json
{
  "nombre_categoria": "Nueva Categoría",
  "descripcion": "Descripción de la categoría"
}
```

**Respuesta:**
```json
{
  "success": true,
  "message": "Categoría creada correctamente",
  "data": {
    "id_categoria": 17,
    "nombre_categoria": "Nueva Categoría",
    "descripcion": "Descripción de la categoría"
  }
}
```

#### PUT - Actualizar categoría
```
PUT /categorias/:id
```

**Body (JSON):**
```json
{
  "nombre_categoria": "Categoría Actualizada",
  "descripcion": "Nueva descripción"
}
```

#### DELETE - Eliminar categoría
```
DELETE /categorias/:id
```

Ejemplo:
```
DELETE /categorias/17
```

## 📊 Tablas de la Base de Datos

1. **categorias** - Categorías de productos
2. **productos** - Inventario de productos
3. **clientes** - Registro de clientes
4. **proveedores** - Proveedores de productos
5. **empleados** - Personal de la empresa
6. **facturas** - Facturas de ventas
7. **factura_detalle** - Detalles de cada factura
8. **regiones** - Regiones geográficas
9. **ubicaciones** - Ubicaciones dentro de regiones
10. **correos** - Logs de correos enviados
11. **clientes_demo** - Tabla para pruebas

## 🔍 Probar los Endpoints

### Opción 1: Usando Postman

1. Descarga Postman: https://www.postman.com/downloads/
2. Crea una nueva colección
3. Prueba los endpoints listados arriba

### Opción 2: Usando cURL

```bash
# GET todas las categorías
curl http://localhost:5000/api/categorias

# GET categoría por ID
curl http://localhost:5000/api/categorias/1

# POST nueva categoría
curl -X POST http://localhost:5000/api/categorias \
  -H "Content-Type: application/json" \
  -d '{"nombre_categoria":"Electro","descripcion":"Electrónica"}'

# PUT actualizar
curl -X PUT http://localhost:5000/api/categorias/1 \
  -H "Content-Type: application/json" \
  -d '{"nombre_categoria":"Electrónica Updated","descripcion":"Nueva descripción"}'

# DELETE
curl -X DELETE http://localhost:5000/api/categorias/17
```

### Opción 3: Extensión REST Client para VS Code

Instala la extensión "REST Client" y crea un archivo `test.http`:

```http
### GET - Obtener todas las categorías
GET http://localhost:5000/api/categorias

### GET - Obtener categoría por ID
GET http://localhost:5000/api/categorias/1

### POST - Crear nueva categoría
POST http://localhost:5000/api/categorias
Content-Type: application/json

{
  "nombre_categoria": "Nueva",
  "descripcion": "Test"
}

### PUT - Actualizar
PUT http://localhost:5000/api/categorias/1
Content-Type: application/json

{
  "nombre_categoria": "Electrónica Pro",
  "descripcion": "Actualizada"
}

### DELETE - Eliminar
DELETE http://localhost:5000/api/categorias/17
```

## 🔐 Variantes de Respuesta

### Respuesta exitosa (200)
```json
{
  "success": true,
  "message": "Mensaje descriptivo",
  "data": { /* datos */ }
}
```

### Error de validación (400)
```json
{
  "success": false,
  "message": "El nombre de la categoría es requerido"
}
```

### Recurso no encontrado (404)
```json
{
  "success": false,
  "message": "Categoría no encontrada"
}
```

### Error del servidor (500)
```json
{
  "success": false,
  "message": "Descripción del error"
}
```

## 📚 Conceptos Implementados

- **Node.js** - Runtime de JavaScript en servidor
- **Express.js** - Framework web minimalista
- **ES Modules** - Sistema moderno de módulos
- **Router** - Enrutamiento de peticiones HTTP
- **Middleware** - Funciones intermedias
- **MVC** - Separación de responsabilidades
- **Async/Await** - Manejo de promesas
- **CORS** - Compartición de recursos entre dominios
- **CRUD** - Operaciones básicas de datos

## 🐛 Solución de Problemas

### Error: "Cannot find module 'express'"
**Solución:** Ejecuta `npm install` en la carpeta backend

### Error: "Connection failed"
**Verificar:**
1. MySQL esté corriendo (XAMPP encendido)
2. Variables de entorno (.env) correctas
3. Base de datos importada correctamente

### Error: "Port 5000 already in use"
**Solución:** 
```bash
# Cambiar puerto en .env o ejecutar en otro puerto
PORT=3000 npm run dev
```

## 📝 Notas Importantes

- El archivo `.env` contiene credenciales sensibles - **NO** versionarlo en producción
- nodemon está configurado solo para desarrollo
- Los índices en la BD optimizan las consultas
- FOREIGN KEYS mantienen la integridad referencial

## 🚀 Próximos Pasos

- [ ] Implementar autenticación JWT
- [ ] Agregar rutas para productos, clientes, etc.
- [ ] Validación de entrada con middlewares
- [ ] Rate limiting
- [ ] Documentación Swagger/OpenAPI
- [ ] Tests unitarios e integración
- [ ] Despliegue en producción

## 📄 Licencia

Este proyecto es de código abierto para fines educativos.

---

**¿Preguntas?** Consulta la documentación oficial:
- [Node.js](https://nodejs.org/en/docs/)
- [Express.js](https://expressjs.com/)
- [MySQL](https://dev.mysql.com/doc/)
