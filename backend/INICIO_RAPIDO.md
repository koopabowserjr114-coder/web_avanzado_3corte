# 🎯 INICIO RÁPIDO - 5 MINUTOS

## ⚡ SI TIENES PRISA, SIGUE ESTO

### 1️⃣ Instala dependencias (2 min)
```bash
cd c:\xampp\htdocs\60%_3corte\backend
npm install
```

### 2️⃣ Importa base de datos (1 min)
```
http://localhost/phpmyadmin
→ Importar → Seleccionar SQL_INVENTARIO.sql → Continuar
```

### 3️⃣ Inicia servidor (1 min)
```bash
npm run dev
```

### 4️⃣ Prueba (1 min)
```
http://localhost:5000/api/categorias
```

✅ **¡HECHO!**

---

## 📱 PRUEBA RÁPIDA EN NAVEGADOR

Copia y pega estas URLs en tu navegador:

### Obtener todas las categorías:
```
http://localhost:5000/api/categorias
```

### Obtener categoría ID 1:
```
http://localhost:5000/api/categorias/1
```

### Ver mensaje de bienvenida:
```
http://localhost:5000/
```

---

## 🧪 PRUEBA CON POSTMAN

1. Abre Postman
2. Crea petición GET
3. URL: `http://localhost:5000/api/categorias`
4. Click Send
5. ¡Ver respuesta JSON!

---

## 📚 DOCUMENTACIÓN

### Para instalación completa:
```
Lee: GUIA_INSTALACION.md
```

### Para detalles técnicos:
```
Lee: README.md
```

### Para la base de datos:
```
Lee: BASE_DE_DATOS.md
```

### Para resumen general:
```
Lee: RESUMEN.md
```

---

## 🔥 COMANDOS ÚTILES

```bash
# Instalar dependencias
npm install

# Iniciar servidor con auto-reload
npm run dev

# Iniciar servidor normal
npm start

# Ver versión de Node
node --version

# Ver versión de npm
npm --version

# Ver status de npm
npm list
```

---

## 💾 ARCHIVO SQL

**Ubicación:**
```
c:\xampp\htdocs\60%_3corte\backend\SQL_INVENTARIO.sql
```

**Importar en phpMyAdmin:**
1. http://localhost/phpmyadmin
2. Click "Importar"
3. Seleccionar archivo
4. Buscar SQL_INVENTARIO.sql
5. Click Continuar

**O desde MySQL:**
```bash
mysql -u root < SQL_INVENTARIO.sql
```

---

## ✅ CHECKLIST

- [ ] Node.js instalado (`node --version`)
- [ ] XAMPP corriendo (Apache + MySQL)
- [ ] Terminal abierta en carpeta backend
- [ ] `npm install` completado
- [ ] `SQL_INVENTARIO.sql` importado en phpMyAdmin
- [ ] `npm run dev` sin errores
- [ ] `http://localhost:5000/` funciona
- [ ] `http://localhost:5000/api/categorias` devuelve JSON

---

## 🚨 PROBLEMAS COMUNES

### Error: "Cannot find module"
```bash
npm install
```

### Error: "connect ECONNREFUSED"
Abre XAMPP → Start MySQL

### Error: "Port 5000 already in use"
```bash
Ctrl+C (en terminal)
npm run dev (de nuevo)
```

### Error: "Table doesn't exist"
Importa de nuevo el SQL_INVENTARIO.sql

---

## 📡 ENDPOINTS RÁPIDO

```
GET    http://localhost:5000/api/categorias
GET    http://localhost:5000/api/categorias/1
POST   http://localhost:5000/api/categorias
PUT    http://localhost:5000/api/categorias/1
DELETE http://localhost:5000/api/categorias/1
```

---

## 📂 ARCHIVOS IMPORTANTES

```
backend/
├── .env ......................... Variables de entorno
├── SQL_INVENTARIO.sql .......... Base de datos
├── package.json ................ Dependencias
├── README.md ................... Docs técnicas
├── GUIA_INSTALACION.md ........ Paso a paso
├── BASE_DE_DATOS.md ........... Info BD
├── INICIO_RAPIDO.md ........... Este archivo
├── RESUMEN.md ................. Resumen gral
└── src/
    ├── index.js ............... Servidor
    ├── app.js ................. Express config
    ├── config.js .............. MySQL config
    ├── controllers/ ........... Lógica
    ├── routes/ ................ Rutas
    └── db/ .................... Modelos
```

---

## 🎓 ESTRUCTURA BÁSICA

```javascript
// index.js - SERVIDOR
import app from './app.js';

app.listen(5000, () => {
  console.log('Servidor corriendo en puerto 5000');
});
```

```javascript
// app.js - EXPRESS
import express from 'express';

const app = express();
app.use(express.json());

export default app;
```

```javascript
// controllers/categoriaController.js - LÓGICA
export const getCategorias = async (req, res) => {
  const categorias = await getAllCategorias();
  res.json({ success: true, data: categorias });
};
```

```javascript
// routes/categorias.routes.js - RUTAS
router.get('/', getCategorias);
router.post('/', postCategoria);
router.put('/:id', putCategoria);
router.delete('/:id', deleteCategoria);
```

---

## 🔗 FLUJO DE UNA PETICIÓN

```
1. Cliente: GET http://localhost:5000/api/categorias
                          ↓
2. Router: Identifica que es GET en /categorias
                          ↓
3. Controller: Llama getAllCategorias()
                          ↓
4. Model: Ejecuta query SQL
                          ↓
5. Database: Retorna datos
                          ↓
6. Model: Retorna datos a Controller
                          ↓
7. Controller: Formatea respuesta JSON
                          ↓
8. Router: Envía respuesta
                          ↓
9. Cliente: Recibe JSON con categorías
```

---

## 💡 TIPS

✅ Usa **Postman** para probar APIs  
✅ **Ctrl+C** detiene el servidor  
✅ **npm run dev** con Nodemon es mejor  
✅ **Revisa la terminal** si algo falla  
✅ **Verifica .env** si no conecta a BD  
✅ **Abre DevTools** en navegador (F12) para ver respuestas  

---

## 📞 SOPORTE RÁPIDO

| Problema | Solución |
|----------|----------|
| No conecta a BD | Inicia MySQL en XAMPP |
| Puerto en uso | Cierra terminal anterior |
| Módulos no encontrados | `npm install` |
| Cambios no se ven | Reinicia con `npm run dev` |
| Error 404 | Revisa la URL |

---

## 🚀 AHORA QUE FUNCIONA...

1. **Crea más rutas** para Productos, Clientes, etc.
2. **Agrega validación** en controladores
3. **Implementa autenticación** JWT
4. **Crea frontend** (React, Vue, etc.)
5. **Despliega a producción**

---

**¡Tu backend API está listo! 🎉**

Hecho en: Noviembre 2024
