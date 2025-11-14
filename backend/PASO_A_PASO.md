# 🎬 GUÍA VIDEO PASO A PASO

## 📺 SIGUE ESTOS PASOS EXACTOS

### PASO 1️⃣: INSTALAR DEPENDENCIAS (2 min)

**Terminal:**
```bash
cd c:\xampp\htdocs\60%_3corte\backend
npm install
```

**Espera a ver:**
```
added 57 packages
```

✅ **PASO 1 COMPLETADO**

---

### PASO 2️⃣: INICIAR XAMPP (1 min)

**En tu computadora:**
1. Abre XAMPP Control Panel
2. Haz clic en "Start" en MySQL
3. Haz clic en "Start" en Apache
4. Espera 2 segundos

**Resultado esperado:**
```
MySQL: running
Apache: running
```

✅ **PASO 2 COMPLETADO**

---

### PASO 3️⃣: CREAR BASE DE DATOS (2 min)

**En navegador:**
```
http://localhost/phpmyadmin
```

**Pasos:**
1. Haz clic en "Importar" (arriba)
2. Haz clic en "Seleccionar archivo"
3. Busca: `SQL_INVENTARIO.sql`
4. Localización: `c:\xampp\htdocs\60%_3corte\backend\`
5. Selecciona el archivo
6. Haz clic en "Continuar" (abajo)
7. ⏳ Espera 2-5 segundos

**Resultado esperado:**
```
✓ 65 consultas ejecutadas
✓ Base de datos "inventario" creada
✓ 11 tablas creadas
```

✅ **PASO 3 COMPLETADO**

---

### PASO 4️⃣: VERIFICAR BASE DE DATOS (1 min)

**En phpMyAdmin:**
1. Mira a la izquierda
2. Haz clic en "inventario"
3. Deberías ver las 11 tablas:
   - categorias ✓
   - productos ✓
   - clientes ✓
   - proveedores ✓
   - empleados ✓
   - facturas ✓
   - factura_detalle ✓
   - regiones ✓
   - ubicaciones ✓
   - correos ✓
   - clientes_demo ✓

✅ **PASO 4 COMPLETADO**

---

### PASO 5️⃣: INICIAR SERVIDOR (1 min)

**Terminal (en backend):**
```bash
npm run dev
```

**Resultado esperado:**
```
╔════════════════════════════════════╗
║  🚀 The Company Web Server 🚀    ║
║  is running on port 5000          ║
║  http://localhost:5000           ║
╚════════════════════════════════════╝
```

✅ **PASO 5 COMPLETADO**

---

### PASO 6️⃣: PRUEBA EN NAVEGADOR (1 min)

**Abre navegador y visita:**

#### URL 1: Mensaje bienvenida
```
http://localhost:5000/
```

**Deberías ver:**
```json
{
  "message": "¡Bienvenido a The Company Web Server!",
  "version": "1.0.0",
  "status": "running"
}
```

#### URL 2: Obtener categorías
```
http://localhost:5000/api/categorias
```

**Deberías ver:**
```json
{
  "success": true,
  "message": "Categorías obtenidas correctamente",
  "data": [
    {
      "id_categoria": 1,
      "nombre_categoria": "Electrónica",
      "descripcion": "Productos electrónicos y computadoras",
      "estado": 1
    },
    ... más categorías
  ]
}
```

✅ **PASO 6 COMPLETADO**

---

### PASO 7️⃣: PRUEBA CON POSTMAN (2 min) - OPCIONAL

**1. Descarga Postman** (si no lo tienes)
```
https://www.postman.com/downloads/
```

**2. Abre Postman**

**3. Crea petición:**
- Tipo: `GET`
- URL: `http://localhost:5000/api/categorias`
- Haz clic en "Send"

**4. Verás las categorías en formato JSON**

✅ **PASO 7 COMPLETADO (OPCIONAL)**

---

## 🧪 PRUEBAS ADICIONALES

### Crear categoría (POST)

**En Postman:**
1. Tipo: `POST`
2. URL: `http://localhost:5000/api/categorias`
3. Click en "Body"
4. Selecciona "raw"
5. Selecciona "JSON"
6. Copia:
```json
{
  "nombre_categoria": "Prueba",
  "descripcion": "Categoría de prueba"
}
```
7. Click "Send"

**Resultado:**
```json
{
  "success": true,
  "message": "Categoría creada correctamente",
  "data": {
    "id_categoria": 17,
    "nombre_categoria": "Prueba",
    "descripcion": "Categoría de prueba"
  }
}
```

---

### Obtener categoría por ID (GET)

**URL:**
```
http://localhost:5000/api/categorias/1
```

**Resultado:**
```json
{
  "success": true,
  "message": "Categoría obtenida correctamente",
  "data": {
    "id_categoria": 1,
    "nombre_categoria": "Electrónica",
    ...
  }
}
```

---

### Actualizar categoría (PUT)

**En Postman:**
1. Tipo: `PUT`
2. URL: `http://localhost:5000/api/categorias/17`
3. Body (JSON):
```json
{
  "nombre_categoria": "Actualizada",
  "descripcion": "Nueva descripción"
}
```
4. Click "Send"

---

### Eliminar categoría (DELETE)

**URL:**
```
http://localhost:5000/api/categorias/17
```

**Resultado:**
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

## ✅ CHECKLIST FINAL

- [ ] Instalé dependencias (`npm install`)
- [ ] Inicialisé XAMPP (MySQL + Apache)
- [ ] Importé `SQL_INVENTARIO.sql`
- [ ] Verifiqué la BD en phpMyAdmin
- [ ] Ejecuté `npm run dev`
- [ ] Visité `http://localhost:5000/`
- [ ] Visité `http://localhost:5000/api/categorias`
- [ ] Probé con Postman (opcional)
- [ ] ¡FUNCIONA TODO! 🎉

---

## 🚨 SI ALGO FALLA

### Error: "Cannot find module 'express'"
```bash
npm install
```

### Error: "Connection refused"
- Abre XAMPP
- Inicia MySQL
- Espera 2 segundos

### Error: "Port 5000 already in use"
- Cierra la terminal
- Abre nueva terminal
- Ejecuta `npm run dev` de nuevo

### Error: "Table doesn't exist"
- Abre phpMyAdmin
- Importa de nuevo `SQL_INVENTARIO.sql`

---

## 💡 CONSEJOS

✅ Ten phpMyAdmin abierto mientras desarrollas  
✅ Usa Postman para probar endpoints  
✅ La terminal es tu amiga (lee los errores)  
✅ Ctrl+C detiene el servidor  
✅ npm run dev es mejor que npm start  

---

## 📊 RESUMEN DEL TIEMPO

| Paso | Tiempo | Total |
|------|--------|-------|
| 1. npm install | 2 min | 2 min |
| 2. XAMPP | 1 min | 3 min |
| 3. BD SQL | 2 min | 5 min |
| 4. Verificar | 1 min | 6 min |
| 5. Servidor | 1 min | 7 min |
| 6. Prueba | 1 min | 8 min |
| **TOTAL** | **8 minutos** | ✅ |

---

## 🎯 ¡LISTO!

Si completaste todos los pasos, tu backend está:

✅ Instalado  
✅ Configurado  
✅ Corriendo  
✅ Funcional  
✅ Probado  

**¡Felicidades! 🎉**

---

## 📚 PRÓXIMAS LECTURAS

Si todo funciona, lee:
1. `README.md` - Docs técnicas
2. `BASE_DE_DATOS.md` - Info BD
3. `GUIA_INSTALACION.md` - Referencia

---

## 🆘 NECESITAS AYUDA?

```
Problemas de instalación  → GUIA_INSTALACION.md
Problemas de BD          → BASE_DE_DATOS.md
Problemas de código      → README.md
Resumen rápido           → INICIO_RAPIDO.md
```

---

**¡Tu backend está 100% funcionando! 🚀**

Creado: Noviembre 2024
