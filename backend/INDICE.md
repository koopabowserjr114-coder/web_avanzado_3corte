# 🚀 ÍNDICE DE ACCESO RÁPIDO

## 📋 DOCUMENTACIÓN DISPONIBLE

### 🎯 COMIENZA AQUÍ
- **00_LEEME_PRIMERO.md** ← Empieza por aquí
- **INICIO_RAPIDO.md** ← 5 minutos para empezar

### 📖 INSTALACIÓN Y SETUP
- **GUIA_INSTALACION.md** ← Paso a paso completo
- **BASE_DE_DATOS.md** ← Información de la BD

### 📚 DOCUMENTACIÓN TÉCNICA
- **README.md** ← Docs completas
- **RESUMEN.md** ← Resumen de todo
- **COMPLETO.md** ← Resumen visual

### 🧪 PRUEBAS
- **test.http** ← Pruebas REST Client

---

## ⚡ COMANDOS RÁPIDOS

```bash
# Terminal en carpeta backend:
npm install              # Instala dependencias
npm run dev             # Inicia servidor
npm start               # Inicia sin auto-reload
```

---

## 🔗 ENLACES RÁPIDOS

### Servidor
```
http://localhost:5000/              Bienvenida
http://localhost:5000/api/categorias  Todas las categorías
```

### phpMyAdmin
```
http://localhost/phpmyadmin/         Base de datos
```

---

## 📁 ESTRUCTURA

```
backend/
├── .env                        ← Variables de entorno
├── package.json               ← Dependencias
├── SQL_INVENTARIO.sql         ← Base de datos
│
├── src/
│   ├── index.js               ← Servidor
│   ├── app.js                 ← Express config
│   ├── config.js              ← MySQL config
│   ├── controllers/
│   │   └── categoriaController.js
│   ├── db/
│   │   └── categoriaModel.js
│   └── routes/
│       └── categorias.routes.js
│
└── Documentación/
    ├── 00_LEEME_PRIMERO.md
    ├── INICIO_RAPIDO.md
    ├── GUIA_INSTALACION.md
    ├── README.md
    ├── BASE_DE_DATOS.md
    ├── RESUMEN.md
    ├── COMPLETO.md
    └── test.http
```

---

## ✅ CHECKLIST DE INSTALACIÓN

- [ ] Descargar/Clonar proyecto
- [ ] Abre terminal en carpeta backend
- [ ] Ejecuta: `npm install`
- [ ] Importa `SQL_INVENTARIO.sql` en phpMyAdmin
- [ ] Ejecuta: `npm run dev`
- [ ] Abre: `http://localhost:5000/api/categorias`
- [ ] ¡Funciona!

---

## 🎯 ENDPOINTS

```
GET    /                          → Mensaje bienvenida
GET    /api/categorias            → Obtener todas categorías
GET    /api/categorias/1          → Obtener categoría 1
POST   /api/categorias            → Crear nueva
PUT    /api/categorias/1          → Actualizar categoría 1
DELETE /api/categorias/1          → Eliminar categoría 1
```

---

## 🗄️ BASE DE DATOS

**Nombre:** `inventario`  
**Archivo:** `SQL_INVENTARIO.sql`  
**Tablas:** 11  
**Registros ejemplo:** ~60  

### Tablas principales:
- categorias
- productos
- clientes
- proveedores
- empleados
- facturas

---

## 🔐 CONFIGURACIÓN

**.env contiene:**
```
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=inventario
PORT=5000
```

---

## 📞 AYUDA

| Problema | Página |
|----------|--------|
| ¿Cómo instalo? | GUIA_INSTALACION.md |
| ¿Cómo uso la BD? | BASE_DE_DATOS.md |
| ¿Documentación? | README.md |
| ¿Resumen? | RESUMEN.md |
| ¿Rápido? | INICIO_RAPIDO.md |

---

## 🚀 ¡COMENZAR AHORA!

1. Abre terminal
2. `cd c:\xampp\htdocs\60%_3corte\backend`
3. `npm install`
4. Importa SQL
5. `npm run dev`
6. ¡Listo!

---

**Creado:** Noviembre 2024  
**Estado:** ✅ Completado
