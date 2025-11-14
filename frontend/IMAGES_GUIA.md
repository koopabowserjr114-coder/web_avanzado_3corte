# 🖼️ CÓMO AGREGAR IMÁGENES AL FRONTEND

## 📁 Carpeta de Imágenes

Las imágenes deben colocarse en: `frontend/images/`

---

## 📝 Nombres de Imágenes Requeridos

Según la base de datos, las 10 categorías usan estas imágenes:

```
1. panes.jpg
2. carnes.jpg
3. condimentos.jpg
4. confites.jpg
5. quesos.jpg
6. mariscos.jpg
7. frutas.jpg
8. verduras.jpg
9. bebidas.jpg
10. lacteos.jpg
```

---

## 🎯 OPCIÓN 1: Descargar Imágenes (Recomendado)

### Paso 1: Descargar desde Unsplash (Gratis)

1. Ve a: https://unsplash.com/
2. Busca cada categoría (ej: "bread", "meat", etc.)
3. Descarga en resolución: 500x500 (mínimo)
4. Renombra según lista arriba

### Paso 2: Convertir a JPG

- Usa: https://convertio.co/es/ (gratis, online)
- O usa Paint: File → Export As → JPG

### Paso 3: Copiar a la Carpeta

Coloca las imágenes en: `c:\xampp\htdocs\60%_3corte\frontend\images\`

---

## 🎨 OPCIÓN 2: Usar URLs de Internet (Rápido)

Si no quieres descargar, edita `frontend/api/consumApi.js`:

Busca esta línea en `obtenerCategorias()`:

```javascript
export const obtenerCategorias = async () => {
    // ... código ...
    return datos.data || datos;
};
```

Luego en `frontend/js/inventario.js`, modifica donde crea las imágenes:

**De esto:**
```html
<img src="images/${imagen}" alt="${nombre_categoria}" width="80">
```

**A esto:**
```html
<img src="https://via.placeholder.com/80?text=${nombre_categoria}" alt="${nombre_categoria}" width="80">
```

O usa URLs reales de imágenes:

```javascript
const imagenMap = {
    'panes.jpg': 'https://images.unsplash.com/photo-xxx',
    'carnes.jpg': 'https://images.unsplash.com/photo-yyy',
    // ... más
};

<img src="${imagenMap[imagen] || 'https://via.placeholder.com/80'}" alt="${nombre_categoria}" width="80">
```

---

## 📥 OPCIÓN 3: Usar Placeholder (Más Simple)

El código ya soporta fallback:

```javascript
<img src="images/${imagen || 'default.png'}" alt="${nombre_categoria}">
```

Así que si falta una imagen, mostrará `default.png`.

Crea un `default.png` simple o usa:

```html
<img src="https://via.placeholder.com/80/007bff/ffffff?text=Sin+Imagen" alt="default">
```

---

## 🖼️ DIMENSIONES RECOMENDADAS

- **Ancho mínimo**: 100 px
- **Alto mínimo**: 100 px
- **Proporción**: Cuadrada (1:1)
- **Formato**: JPG o PNG
- **Peso**: < 200 KB cada una

---

## 📍 ESTRUCTURA FINAL

```
frontend/
└── images/
    ├── panes.jpg           (100x100 px)
    ├── carnes.jpg          (100x100 px)
    ├── condimentos.jpg     (100x100 px)
    ├── confites.jpg        (100x100 px)
    ├── quesos.jpg          (100x100 px)
    ├── mariscos.jpg        (100x100 px)
    ├── frutas.jpg          (100x100 px)
    ├── verduras.jpg        (100x100 px)
    ├── bebidas.jpg         (100x100 px)
    ├── lacteos.jpg         (100x100 px)
    └── default.png         (Opcional, para fallback)
```

---

## 🔧 VERIFICAR QUE FUNCIONA

### Paso 1: Coloca las imágenes en `frontend/images/`

### Paso 2: Abre el navegador

### Paso 3: Ve a la tabla de categorías

**Resultado esperado:**
```
├─ Panes     [🖼️ imagen de pan]
├─ Carnes    [🖼️ imagen de carne]
├─ Condim.   [🖼️ imagen de condimento]
└─ ... etc
```

---

## 🎯 TAMAÑOS DE EJEMPLO

### Opción A: Búsqueda rápida

**Google Images:**
1. Busca: "bread food photography"
2. Click derecho → Copiar URL
3. Descarga directamente

**Unsplash:**
1. Ve a: unsplash.com
2. Busca el objeto (bread, meat, etc.)
3. Descarga en 500x500

### Opción B: Crear tus propias imágenes

- Usa **Paint 3D** (Windows)
- Usa **Canva** (Online): canva.com
- Usa **Photoshop** (Profesional)

---

## 💡 TIPS

✅ Las imágenes son **opcionales** - la tabla funciona sin ellas  
✅ Usa nombres **iguales** a los en la BD  
✅ Las imágenes **acelerar la carga** con tamaños pequeños  
✅ JPG es mejor para **fotos**, PNG para **iconos**  
✅ Verifica con F12 (consola) si hay errores 404  

---

## ❌ SOLUCIÓN DE PROBLEMAS

### Imágenes no se muestran

**Causa:** Ruta incorrecta

**Solución:** Verifica en `inventario.js`:

```javascript
// Debe ser así (relativo desde index.html)
<img src="images/${imagen}" ...>

// NO así (absoluto)
<img src="c:\xampp\htdocs\...\images\${imagen}" ...>

// NO así (URL de otra carpeta)
<img src="../images/${imagen}" ...>
```

### Error 404 en consola

**Causa:** La imagen no existe en la carpeta

**Solución:**
1. Verifica que el archivo existe en `frontend/images/`
2. Verifica que el nombre es exacto (mayúsculas/minúsculas)
3. Abre la carpeta: `c:\xampp\htdocs\60%_3corte\frontend\images\`

### Imágenes muy lentes

**Causa:** Tamaño de archivo > 500 KB

**Solución:**
1. Comprime con: https://tinypng.com
2. O redimensiona a 100x100 con Paint

---

## 🎨 GENERAR IMÁGENES ONLINE

**Sitios gratis para descargar imágenes:**

- ✅ Unsplash: unsplash.com
- ✅ Pexels: pexels.com
- ✅ Pixabay: pixabay.com
- ✅ Freepik: freepik.com
- ✅ Pixabay: pixabay.com

**Generar placeholders:**

- ✅ Placeholder.com: placeholder.com
- ✅ Via.placeholder.com
- ✅ Picsum.photos

---

## 📞 RESUMEN RÁPIDO

```
1. Crea carpeta: frontend/images/

2. Descarga 10 imágenes:
   panes.jpg, carnes.jpg, ... lacteos.jpg

3. Coloca en: c:\xampp\htdocs\60%_3corte\frontend\images\

4. Abre el navegador y verás las imágenes en la tabla

5. ¡Listo! ✅
```

---

**¡Tus imágenes están listas para usar! 🖼️**
