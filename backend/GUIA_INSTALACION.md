# 📖 GUÍA COMPLETA - INSTALACIÓN Y EJECUCIÓN

## 🎯 Objetivo
Crear un backend API RESTful para un sistema de inventario usando Node.js, Express y MySQL.

---

## ⏱️ PASO 1: PREREQUISITOS (5 minutos)

### Verificar que tienes instalado:

1. **Node.js y npm**
   ```bash
   node --version
   npm --version
   ```
   Si no tienes: https://nodejs.org/ (descargar LTS)

2. **XAMPP (con Apache y MySQL)**
   - Descarga: https://www.apachefriends.org/
   - Abre XAMPP Control Panel
   - Inicia Apache y MySQL

3. **Git (opcional pero recomendado)**
   ```bash
   git --version
   ```

---

## ⏱️ PASO 2: CREAR LA BASE DE DATOS (10 minutos)

### 2.1 Abre phpMyAdmin

```
http://localhost/phpmyadmin
```

### 2.2 Importar base de datos SQL

1. Haz clic en la pestaña **"Importar"**
2. Haz clic en **"Seleccionar archivo"**
3. Busca y selecciona: `SQL_INVENTARIO.sql` (en la carpeta backend)
4. Haz clic en **"Continuar"**
5. ¡Espera a que termine!

**Resultado esperado:**
- Se crea la base de datos `inventario`
- Se crean 11 tablas con datos de ejemplo

### 2.3 Verificar la base de datos

En phpMyAdmin:
1. Haz clic en "inventario" (lado izquierdo)
2. Deberías ver las tablas: categorias, productos, clientes, etc.
3. Haz clic en "categorias" → "Ver datos"
4. Deberías ver 16 categorías de ejemplo

✅ **Si ves esto, la BD está lista**

---

## ⏱️ PASO 3: INSTALAR DEPENDENCIAS (5 minutos)

### 3.1 Abre terminal en la carpeta backend

```bash
cd c:\xampp\htdocs\60%_3corte\backend
```

### 3.2 Instala las dependencias

```bash
npm install
```

**Esto instalará:**
- express (framework web)
- mysql2 (driver MySQL)
- nodemon (auto-reload)

**Resultado esperado:**
```
added 57 packages in 2s
```

✅ **Se creó la carpeta node_modules**

---

## ⏱️ PASO 4: CONFIGURAR VARIABLES DE ENTORNO (2 minutos)

### 4.1 Abre el archivo `.env`

La ruta es: `backend/.env`

### 4.2 Verifica el contenido

```
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=inventario
PORT=5000
```

**Si tu MySQL tiene contraseña, cámbialo aquí:**
```
DB_PASSWORD=tu_contraseña
```

✅ **Archivo .env configurado**

---

## ⏱️ PASO 5: INICIAR EL SERVIDOR (2 minutos)

### 5.1 Terminal en carpeta backend

```bash
npm run dev
```

### 5.2 Resultado esperado

```
╔════════════════════════════════╗
║  🚀 The Company Web Server 🚀 ║
║  is running on port 5000       ║
║  http://localhost:5000        ║
╚════════════════════════════════╝
```

**¡El servidor está corriendo!** 🎉

---

## ⏱️ PASO 6: PROBAR LOS ENDPOINTS (10 minutos)

### Opción A: Usando el navegador

1. Abre: **http://localhost:5000/**

Deberías ver:
```json
{
  "message": "¡Bienvenido a The Company Web Server!",
  "version": "1.0.0",
  "status": "running"
}
```

2. Abre: **http://localhost:5000/api/categorias**

Deberías ver todas las categorías en JSON

### Opción B: Usando cURL (terminal)

```bash
# Obtener todas las categorías
curl http://localhost:5000/api/categorias

# Obtener categoría ID 1
curl http://localhost:5000/api/categorias/1

# Crear nueva categoría
curl -X POST http://localhost:5000/api/categorias ^
  -H "Content-Type: application/json" ^
  -d "{\"nombre_categoria\":\"Test\",\"descripcion\":\"Prueba\"}"

# Actualizar categoría
curl -X PUT http://localhost:5000/api/categorias/1 ^
  -H "Content-Type: application/json" ^
  -d "{\"nombre_categoria\":\"Actualizado\",\"descripcion\":\"Nueva desc\"}"

# Eliminar categoría
curl -X DELETE http://localhost:5000/api/categorias/17
```

### Opción C: Usando Postman (RECOMENDADO)

1. Descarga Postman: https://www.postman.com/downloads/
2. Abre Postman
3. Crea una nueva petición
4. Tipo: **GET**
5. URL: `http://localhost:5000/api/categorias`
6. Haz clic en **"Send"**

✅ **Deberías ver las categorías en formato JSON**

### Opción D: Usando VS Code REST Client

1. Instala extensión "REST Client" en VS Code
2. Abre el archivo `test.http`
3. Haz clic en **"Send Request"** (encima de cada petición)

---

## 📊 RESPUESTAS ESPERADAS

### GET /api/categorias (obtener todas)
```json
{
  "success": true,
  "message": "Categorías obtenidas correctamente",
  "data": [
    {
      "id_categoria": 1,
      "nombre_categoria": "Electrónica",
      "descripcion": "Productos electrónicos y computadoras",
      "fecha_creacion": "2024-01-10T15:30:00.000Z",
      "estado": 1
    },
    {
      "id_categoria": 2,
      "nombre_categoria": "Ropa",
      "descripcion": "Prendas de vestir para hombre y mujer",
      "fecha_creacion": "2024-01-10T15:30:00.000Z",
      "estado": 1
    }
    // ... más categorías
  ]
}
```

### GET /api/categorias/1 (obtener por ID)
```json
{
  "success": true,
  "message": "Categoría obtenida correctamente",
  "data": {
    "id_categoria": 1,
    "nombre_categoria": "Electrónica",
    "descripcion": "Productos electrónicos y computadoras",
    "fecha_creacion": "2024-01-10T15:30:00.000Z",
    "estado": 1
  }
}
```

### POST /api/categorias (crear)
**Body enviado:**
```json
{
  "nombre_categoria": "Nueva Categoría",
  "descripcion": "Descripción del nuevo producto"
}
```

**Respuesta (201):**
```json
{
  "success": true,
  "message": "Categoría creada correctamente",
  "data": {
    "id_categoria": 17,
    "nombre_categoria": "Nueva Categoría",
    "descripcion": "Descripción del nuevo producto"
  }
}
```

### PUT /api/categorias/1 (actualizar)
**Body enviado:**
```json
{
  "nombre_categoria": "Electrónica Profesional",
  "descripcion": "Productos electrónicos de alto rendimiento"
}
```

**Respuesta (200):**
```json
{
  "success": true,
  "message": "Categoría actualizada correctamente",
  "data": {
    "id_categoria": 1,
    "nombre_categoria": "Electrónica Profesional",
    "descripcion": "Productos electrónicos de alto rendimiento"
  }
}
```

### DELETE /api/categorias/17 (eliminar)
**Respuesta (200):**
```json
{
  "success": true,
  "message": "Categoría eliminada correctamente",
  "data": {
    "id_categoria": 17
  }
}
```

---

## 🔍 VERIFICAR QUE TODO FUNCIONA

### Checklist:

- [ ] Node.js y npm instalados
- [ ] XAMPP corriendo (Apache y MySQL)
- [ ] Base de datos importada (11 tablas visibles en phpMyAdmin)
- [ ] npm install completado (carpeta node_modules existe)
- [ ] .env configurado correctamente
- [ ] `npm run dev` ejecutándose sin errores
- [ ] http://localhost:5000/ devuelve mensaje de bienvenida
- [ ] http://localhost:5000/api/categorias devuelve JSON con categorías
- [ ] POST crea nuevas categorías
- [ ] PUT actualiza categorías
- [ ] DELETE elimina categorías

---

## 📁 ESTRUCTURA DE ARCHIVOS CREADOS

```
backend/
├── src/
│   ├── controllers/
│   │   └── categoriaController.js    ← Lógica de negocio
│   ├── db/
│   │   └── categoriaModel.js         ← Interacción con BD
│   ├── routes/
│   │   └── categorias.routes.js      ← Definición de rutas
│   ├── app.js                        ← Configuración Express
│   ├── config.js                     ← Conexión a MySQL
│   └── index.js                      ← Punto de entrada
├── .env                              ← Variables de entorno
├── .gitignore                        ← Archivos a ignorar en Git
├── package.json                      ← Dependencias
├── test.http                         ← Pruebas para REST Client
├── SQL_INVENTARIO.sql               ← Base de datos
└── README.md                         ← Documentación
```

---

## 🛑 SOLUCIÓN DE PROBLEMAS

### Problema: "Cannot find module 'express'"

**Causa:** Las dependencias no están instaladas

**Solución:**
```bash
npm install
```

---

### Problema: "Error: connect ECONNREFUSED 127.0.0.1:3306"

**Causa:** MySQL no está corriendo

**Solución:**
1. Abre XAMPP Control Panel
2. Haz clic en "Start" en la fila de MySQL
3. Espera 2-3 segundos
4. Intenta de nuevo

---

### Problema: "Port 5000 already in use"

**Causa:** Otro programa usa el puerto 5000

**Soluciones:**
1. Cierra el servidor anterior (`Ctrl+C` en terminal)
2. O cambia el puerto en `.env`:
   ```
   PORT=3000
   ```

---

### Problema: "Table 'inventario.categorias' doesn't exist"

**Causa:** La BD no se importó correctamente

**Solución:**
1. Abre phpMyAdmin
2. Elimina la BD inventario (lado derecho)
3. Importa de nuevo el archivo SQL_INVENTARIO.sql

---

## 🚀 PRÓXIMOS PASOS

Una vez todo funciona:

1. **Agregar más rutas** para:
   - Productos
   - Clientes
   - Proveedores
   - Empleados
   - Facturas

2. **Implementar autenticación** con JWT

3. **Agregar validación** de datos

4. **Crear frontend** (React, Vue o similar)

5. **Desplegar a producción**

---

## 📚 REFERENCIAS

- [Node.js Official](https://nodejs.org/)
- [Express.js Documentation](https://expressjs.com/)
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [HTTP Status Codes](https://httpwg.org/specs/rfc7231.html#status.codes)
- [REST API Best Practices](https://restfulapi.net/)

---

## 💡 TIPS

1. **Usar Postman** para probar APIs es mucho más fácil que cURL
2. **Nodemon** automáticamente recarga el servidor cuando editas archivos
3. **Control+C** en la terminal detiene el servidor
4. **Las contraseñas NUNCA** deben ir en el código, usa .env
5. **Siempre verifica** la conexión a BD antes de crear rutas

---

## ✅ ¡FELICIDADES!

Has creado un **backend profesional** con:
- ✅ Node.js y Express
- ✅ Base de datos MySQL
- ✅ Arquitectura MVC
- ✅ API RESTful funcional
- ✅ CRUD completo

**¡Estás listo para continuar con el siguiente nivel!**

---

Última actualización: Noviembre 2024
