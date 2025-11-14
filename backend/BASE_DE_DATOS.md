# 🗄️ BASE DE DATOS - INFORMACIÓN COMPLETA

## 📋 NOMBRE Y UBICACIÓN

**Nombre de la base de datos:** `inventario`

**Archivo SQL:** `SQL_INVENTARIO.sql`

**Ubicación:** `c:\xampp\htdocs\60%_3corte\backend\SQL_INVENTARIO.sql`

---

## 🔧 CÓMO IMPORTAR LA BASE DE DATOS

### OPCIÓN 1: phpMyAdmin (RECOMENDADO) ⭐

#### Paso 1: Abrir phpMyAdmin
```
http://localhost/phpmyadmin
```

#### Paso 2: Crear base de datos (opcional, el script lo hace automáticamente)
- Haz clic en "Bases de datos"
- Nombre: `inventario`
- Haz clic en "Crear"

#### Paso 3: Importar archivo SQL
1. Selecciona la base de datos `inventario` (lado izquierdo)
2. Haz clic en la pestaña **"Importar"**
3. Haz clic en **"Seleccionar archivo"**
4. Busca: `SQL_INVENTARIO.sql`
5. Haz clic en **"Continuar"** (abajo a la izquierda)
6. ¡Espera! (2-5 segundos)

#### Resultado esperado:
```
✓ 65 consultas ejecutadas correctamente
✓ Base de datos "inventario" creada
✓ 11 tablas creadas
✓ Datos de ejemplo insertados
```

---

### OPCIÓN 2: Línea de comandos MySQL

```bash
# Acceder a MySQL
mysql -u root -p

# Si no tiene contraseña, solo:
mysql -u root

# En la consola MySQL:
SOURCE c:\xampp\htdocs\60%_3corte\backend\SQL_INVENTARIO.sql;

# O desde fuera de MySQL:
mysql -u root < c:\xampp\htdocs\60%_3corte\backend\SQL_INVENTARIO.sql
```

---

### OPCIÓN 3: Crear manualmente

1. En phpMyAdmin crea base de datos `inventario`
2. Ve a "Importar"
3. Copia y pega el contenido del archivo `SQL_INVENTARIO.sql`
4. Ejecuta

---

## 📊 TABLAS DE LA BASE DE DATOS

### 1. CATEGORIAS
```sql
id_categoria (PK)
nombre_categoria (UNIQUE)
descripcion
fecha_creacion
estado (1=Activo, 0=Inactivo)
```

**Registros: 16**
- Electrónica, Ropa, Alimentos, Libros, Deportes, Hogar, Belleza, Juguetes, Muebles, Accesorios, Automóvil, Jardín, Mascotas, Tecnología, Bebidas, Otros

---

### 2. PRODUCTOS
```sql
id_producto (PK)
nombre_producto
id_categoria (FK → categorias)
descripcion
precio_unitario
cantidad_stock
fecha_creacion
estado
```

**Registros: 10**
- Laptop HP, Mouse Logitech, Camiseta, Jean, Arroz, Leche, Libros, Bicicleta, Lámpara, etc.

---

### 3. CLIENTES
```sql
id_cliente (PK)
nombre_cliente
apellido_cliente
email (UNIQUE)
telefono
direccion
ciudad
fecha_registro
estado
```

**Registros: 8**
- Clientes de ejemplo con contacto

---

### 4. PROVEEDORES
```sql
id_proveedor (PK)
nombre_proveedor (UNIQUE)
contacto_nombre
contacto_email
contacto_telefono
direccion
ciudad
fecha_registro
estado
```

**Registros: 5**
- Tech Solutions, Textil Import, Alimentos del Campo, Ediciones Libros, Deportes Pro

---

### 5. EMPLEADOS
```sql
id_empleado (PK)
nombre_empleado
apellido_empleado
email (UNIQUE)
telefono
cargo
fecha_contratacion
salario
fecha_creacion
estado
```

**Registros: 5**
- Gerente General, Vendedores, Almacenero, Contador

---

### 6. FACTURAS
```sql
id_factura (PK)
numero_factura (UNIQUE)
id_cliente (FK → clientes)
id_empleado (FK → empleados)
fecha_factura
total_factura
estado_pago (Pendiente, Pagada, Cancelada)
observaciones
```

**Registros: 5**
- Facturas de ejemplo FAC-001-2024 a FAC-005-2024

---

### 7. FACTURA_DETALLE
```sql
id_detalle (PK)
id_factura (FK → facturas)
id_producto (FK → productos)
cantidad
precio_unitario
subtotal (GENERATED)
```

**Registros: 8**
- Detalles de cada factura

---

### 8. REGIONES
```sql
id_region (PK)
nombre_region (UNIQUE)
descripcion
fecha_creacion
```

**Registros: 5**
- Región Central, Norte, Sur, Este, Oeste

---

### 9. UBICACIONES
```sql
id_ubicacion (PK)
id_region (FK → regiones)
nombre_ubicacion
descripcion
```

**Registros: 5**
- Almacenes y sucursales por región

---

### 10. CORREOS
```sql
id_correo (PK)
destinatario
asunto
cuerpo
fecha_envio
estado (Enviado)
```

**Registros: 0 (vacía, para logs futuros)**

---

### 11. CLIENTES_DEMO
```sql
id_cliente (PK)
nombre_cliente
apellido_cliente
email
telefono
fecha_registro
```

**Registros: 0 (vacía, para pruebas)**

---

## 🔗 RELACIONES (FOREIGN KEYS)

```
productos → categorias (id_categoria)
facturas → clientes (id_cliente)
facturas → empleados (id_empleado)
factura_detalle → facturas (id_factura)
factura_detalle → productos (id_producto)
ubicaciones → regiones (id_region)
```

---

## 📈 ÍNDICES CREADOS

Se crean **15 índices** para optimizar consultas:

```sql
idx_productos_categoria
idx_facturas_cliente
idx_facturas_empleado
idx_factura_detalle_factura
idx_factura_detalle_producto
idx_ubicaciones_region
idx_clientes_email
idx_empleados_email
idx_correos_fecha
```

---

## ✏️ CONFIGURACIÓN DE CONEXIÓN

El archivo `backend/.env` contiene:

```
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=inventario
```

---

## 🧪 CONSULTAS ÚTILES

### Ver todas las tablas:
```sql
SHOW TABLES;
```

### Ver estructura de tabla:
```sql
DESCRIBE categorias;
```

### Contar registros:
```sql
SELECT COUNT(*) FROM categorias;
```

### Ver todas las categorías:
```sql
SELECT * FROM categorias;
```

### Insertar nueva categoría:
```sql
INSERT INTO categorias (nombre_categoria, descripcion) 
VALUES ('Nueva', 'Descripción');
```

### Actualizar categoría:
```sql
UPDATE categorias 
SET nombre_categoria = 'Actualizado' 
WHERE id_categoria = 1;
```

### Eliminar categoría:
```sql
DELETE FROM categorias 
WHERE id_categoria = 17;
```

### Consulta con JOIN:
```sql
SELECT f.numero_factura, c.nombre_cliente, f.total_factura
FROM facturas f
JOIN clientes c ON f.id_cliente = c.id_cliente;
```

---

## 🗑️ ELIMINAR Y RECREAR BASE DE DATOS

### Opción 1: Desde phpMyAdmin
1. Selecciona base de datos `inventario`
2. Haz clic en "Operaciones"
3. Haz clic en "Eliminar base de datos"
4. Confirma
5. Importa de nuevo el SQL

### Opción 2: Desde MySQL
```sql
DROP DATABASE inventario;
SOURCE c:\ruta\SQL_INVENTARIO.sql;
```

---

## 📝 DATOS DE EJEMPLO

### Categorías (primeras 5):
| ID | Nombre | Descripción |
|----|----|-----------|
| 1 | Electrónica | Productos electrónicos y computadoras |
| 2 | Ropa | Prendas de vestir para hombre y mujer |
| 3 | Alimentos | Productos alimenticios frescos y procesados |
| 4 | Libros | Libros de diversos géneros |
| 5 | Deportes | Equipamiento deportivo |

### Productos (primeros 3):
| ID | Nombre | Categoría | Precio | Stock |
|----|--------|-----------|--------|-------|
| 1 | Laptop HP | 1 | 599.99 | 15 |
| 2 | Mouse Logitech | 1 | 29.99 | 50 |
| 3 | Camiseta básica | 2 | 19.99 | 100 |

### Clientes (primeros 3):
| ID | Nombre | Apellido | Email | Ciudad |
|----|--------|----------|-------|--------|
| 1 | Juan | Pérez | juan.perez@email.com | Ciudad A |
| 2 | María | García | maria.garcia@email.com | Ciudad B |
| 3 | Carlos | López | carlos.lopez@email.com | Ciudad C |

---

## 🚨 IMPORTANTE

- ⚠️ **NO modificar** los nombres de las tablas sin actualizar las rutas
- ⚠️ **No eliminar** las claves foráneas (FOREIGN KEYS)
- ⚠️ **Hacer backup** antes de cambios importantes
- ✅ Siempre **probar** cambios en desarrollo primero
- ✅ **Documentar** cambios en la BD

---

## 📊 ESTADÍSTICAS

- **Tablas:** 11
- **Campos:** ~80
- **Índices:** 15
- **Registros de ejemplo:** ~60
- **Relaciones:** 6
- **Integridad referencial:** Activada con CASCADE

---

## 🔐 SEGURIDAD

El SQL implementa:
- ✅ Constraints UNIQUE en campos sensibles
- ✅ Foreign Keys con integridad referencial
- ✅ Estados para soft-delete
- ✅ Índices para eficiencia
- ✅ UTF8MB4 para caracteres especiales
- ✅ TIMESTAMPS automáticos
- ✅ Valores por defecto

---

## 🎯 PRÓXIMOS PASOS

1. **Crear más rutas** (Productos, Clientes, etc.)
2. **Agregar triggers** para auditoría
3. **Crear vistas** para reportes
4. **Implementar backup automático**
5. **Agregar procedimientos almacenados**

---

**¡Tu base de datos está lista para usar! 🎉**
