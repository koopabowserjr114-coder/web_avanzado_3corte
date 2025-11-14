-- =====================================================
-- BASE DE DATOS: SISTEMA DE INVENTARIO
-- =====================================================
-- Importa este archivo SQL en phpMyAdmin
-- Nombre de base de datos: inventario
-- =====================================================

-- Crear base de datos si no existe
CREATE DATABASE IF NOT EXISTS inventario;
USE inventario;

-- =====================================================
-- TABLA: CATEGORIAS
-- =====================================================
CREATE TABLE IF NOT EXISTS categorias (
  id_categoria INT PRIMARY KEY AUTO_INCREMENT,
  nombre_categoria VARCHAR(100) NOT NULL UNIQUE,
  descripcion TEXT,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  estado TINYINT DEFAULT 1 COMMENT '1=Activo, 0=Inactivo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- TABLA: PRODUCTOS
-- =====================================================
CREATE TABLE IF NOT EXISTS productos (
  id_producto INT PRIMARY KEY AUTO_INCREMENT,
  nombre_producto VARCHAR(150) NOT NULL,
  id_categoria INT NOT NULL,
  descripcion TEXT,
  precio_unitario DECIMAL(10, 2) NOT NULL,
  cantidad_stock INT DEFAULT 0,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  estado TINYINT DEFAULT 1 COMMENT '1=Activo, 0=Inactivo',
  FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- TABLA: CLIENTES
-- =====================================================
CREATE TABLE IF NOT EXISTS clientes (
  id_cliente INT PRIMARY KEY AUTO_INCREMENT,
  nombre_cliente VARCHAR(150) NOT NULL,
  apellido_cliente VARCHAR(150),
  email VARCHAR(100) UNIQUE,
  telefono VARCHAR(20),
  direccion TEXT,
  ciudad VARCHAR(100),
  fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  estado TINYINT DEFAULT 1 COMMENT '1=Activo, 0=Inactivo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- TABLA: PROVEEDORES
-- =====================================================
CREATE TABLE IF NOT EXISTS proveedores (
  id_proveedor INT PRIMARY KEY AUTO_INCREMENT,
  nombre_proveedor VARCHAR(150) NOT NULL UNIQUE,
  contacto_nombre VARCHAR(100),
  contacto_email VARCHAR(100),
  contacto_telefono VARCHAR(20),
  direccion TEXT,
  ciudad VARCHAR(100),
  fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  estado TINYINT DEFAULT 1 COMMENT '1=Activo, 0=Inactivo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- TABLA: EMPLEADOS
-- =====================================================
CREATE TABLE IF NOT EXISTS empleados (
  id_empleado INT PRIMARY KEY AUTO_INCREMENT,
  nombre_empleado VARCHAR(150) NOT NULL,
  apellido_empleado VARCHAR(150),
  email VARCHAR(100) UNIQUE,
  telefono VARCHAR(20),
  cargo VARCHAR(100),
  fecha_contratacion DATE,
  salario DECIMAL(10, 2),
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  estado TINYINT DEFAULT 1 COMMENT '1=Activo, 0=Inactivo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- TABLA: FACTURAS
-- =====================================================
CREATE TABLE IF NOT EXISTS facturas (
  id_factura INT PRIMARY KEY AUTO_INCREMENT,
  numero_factura VARCHAR(50) UNIQUE NOT NULL,
  id_cliente INT NOT NULL,
  id_empleado INT,
  fecha_factura TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  total_factura DECIMAL(12, 2),
  estado_pago VARCHAR(50) DEFAULT 'Pendiente' COMMENT 'Pendiente, Pagada, Cancelada',
  observaciones TEXT,
  FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente) ON DELETE CASCADE,
  FOREIGN KEY (id_empleado) REFERENCES empleados(id_empleado) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- TABLA: FACTURA_DETALLE
-- =====================================================
CREATE TABLE IF NOT EXISTS factura_detalle (
  id_detalle INT PRIMARY KEY AUTO_INCREMENT,
  id_factura INT NOT NULL,
  id_producto INT NOT NULL,
  cantidad INT NOT NULL,
  precio_unitario DECIMAL(10, 2) NOT NULL,
  subtotal DECIMAL(12, 2) GENERATED ALWAYS AS (cantidad * precio_unitario) STORED,
  FOREIGN KEY (id_factura) REFERENCES facturas(id_factura) ON DELETE CASCADE,
  FOREIGN KEY (id_producto) REFERENCES productos(id_producto) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- TABLA: REGIONES
-- =====================================================
CREATE TABLE IF NOT EXISTS regiones (
  id_region INT PRIMARY KEY AUTO_INCREMENT,
  nombre_region VARCHAR(100) NOT NULL UNIQUE,
  descripcion TEXT,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- TABLA: UBICACIONES
-- =====================================================
CREATE TABLE IF NOT EXISTS ubicaciones (
  id_ubicacion INT PRIMARY KEY AUTO_INCREMENT,
  id_region INT NOT NULL,
  nombre_ubicacion VARCHAR(100) NOT NULL,
  descripcion TEXT,
  FOREIGN KEY (id_region) REFERENCES regiones(id_region) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- TABLA: CORREOS (Logs de comunicación)
-- =====================================================
CREATE TABLE IF NOT EXISTS correos (
  id_correo INT PRIMARY KEY AUTO_INCREMENT,
  destinatario VARCHAR(100) NOT NULL,
  asunto VARCHAR(200),
  cuerpo TEXT,
  fecha_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  estado VARCHAR(50) DEFAULT 'Enviado'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- TABLA: CLIENTES_DEMO (Para demo o pruebas)
-- =====================================================
CREATE TABLE IF NOT EXISTS clientes_demo (
  id_cliente INT PRIMARY KEY AUTO_INCREMENT,
  nombre_cliente VARCHAR(150) NOT NULL,
  apellido_cliente VARCHAR(150),
  email VARCHAR(100),
  telefono VARCHAR(20),
  fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- INSERTAR DATOS DE EJEMPLO
-- =====================================================

-- Categorías de ejemplo
INSERT INTO categorias (nombre_categoria, descripcion) VALUES
('Electrónica', 'Productos electrónicos y computadoras'),
('Ropa', 'Prendas de vestir para hombre y mujer'),
('Alimentos', 'Productos alimenticios frescos y procesados'),
('Libros', 'Libros de diversos géneros'),
('Deportes', 'Equipamiento deportivo'),
('Hogar', 'Artículos para el hogar'),
('Belleza', 'Productos de belleza y cuidado personal'),
('Juguetes', 'Juguetes y artículos recreativos'),
('Muebles', 'Muebles para interiores'),
('Accesorios', 'Accesorios varios'),
('Automóvil', 'Piezas y accesorios para vehículos'),
('Jardín', 'Herramientas y productos para el jardín'),
('Mascotas', 'Productos para mascotas'),
('Tecnología', 'Gadgets y dispositivos tecnológicos'),
('Bebidas', 'Bebidas de variados tipos'),
('Otros', 'Categoría variada');

-- Regiones de ejemplo
INSERT INTO regiones (nombre_region, descripcion) VALUES
('Región Central', 'Incluye las ciudades principales'),
('Región Norte', 'Ciudades del norte del país'),
('Región Sur', 'Ciudades del sur del país'),
('Región Este', 'Ciudades del este'),
('Región Oeste', 'Ciudades del oeste');

-- Ubicaciones de ejemplo
INSERT INTO ubicaciones (id_region, nombre_ubicacion, descripcion) VALUES
(1, 'Almacén Central', 'Almacén principal en la región central'),
(1, 'Tienda Centro', 'Tienda retail en el centro de la ciudad'),
(2, 'Almacén Norte', 'Almacén de distribución norte'),
(3, 'Almacén Sur', 'Almacén de distribución sur'),
(4, 'Sucursal Este', 'Sucursal en la región este');

-- Productos de ejemplo
INSERT INTO productos (nombre_producto, id_categoria, descripcion, precio_unitario, cantidad_stock) VALUES
('Laptop HP', 1, 'Laptop HP modelo 15 pulgadas', 599.99, 15),
('Mouse Logitech', 1, 'Mouse inalámbrico Logitech', 29.99, 50),
('Camiseta básica', 2, 'Camiseta de algodón 100%', 19.99, 100),
('Jean azul', 2, 'Pantalón jean azul clásico', 49.99, 75),
('Arroz 1kg', 3, 'Arroz blanco premium', 2.99, 200),
('Leche 1L', 3, 'Leche fresca pasteurizada', 1.50, 150),
('El Quijote', 4, 'Novela clásica de Cervantes', 14.99, 30),
('1984', 4, 'Novela distópica de George Orwell', 12.99, 25),
('Bicicleta montaña', 5, 'Bicicleta con 21 velocidades', 299.99, 10),
('Lámpara de piso', 6, 'Lámpara LED moderna', 79.99, 20);

-- Proveedores de ejemplo
INSERT INTO proveedores (nombre_proveedor, contacto_nombre, contacto_email, contacto_telefono, ciudad) VALUES
('Tech Solutions', 'Juan Pérez', 'juan@techsolutions.com', '555-0101', 'Ciudad Central'),
('Textil Import', 'María García', 'maria@textiimport.com', '555-0102', 'Ciudad Centro'),
('Alimentos del Campo', 'Carlos López', 'carlos@alimentoscampo.com', '555-0103', 'Ciudad Rural'),
('Ediciones Libros', 'Ana Rodríguez', 'ana@edicioneslibros.com', '555-0104', 'Ciudad Cultura'),
('Deportes Pro', 'Roberto Martínez', 'roberto@deportespro.com', '555-0105', 'Ciudad Activa');

-- Empleados de ejemplo
INSERT INTO empleados (nombre_empleado, apellido_empleado, email, telefono, cargo, fecha_contratacion, salario) VALUES
('José', 'Jiménez', 'jose@thecompany.com', '555-1001', 'Gerente General', '2022-01-15', 3000.00),
('Laura', 'Sánchez', 'laura@thecompany.com', '555-1002', 'Vendedor', '2022-06-01', 1500.00),
('Miguel', 'González', 'miguel@thecompany.com', '555-1003', 'Almacenero', '2023-01-10', 1200.00),
('Patricia', 'Flores', 'patricia@thecompany.com', '555-1004', 'Contadora', '2022-03-20', 2000.00),
('David', 'Torres', 'david@thecompany.com', '555-1005', 'Vendedor', '2023-05-15', 1500.00);

-- Clientes de ejemplo
INSERT INTO clientes (nombre_cliente, apellido_cliente, email, telefono, ciudad) VALUES
('Juan', 'Pérez', 'juan.perez@email.com', '555-2001', 'Ciudad A'),
('María', 'García', 'maria.garcia@email.com', '555-2002', 'Ciudad B'),
('Carlos', 'López', 'carlos.lopez@email.com', '555-2003', 'Ciudad C'),
('Ana', 'Rodríguez', 'ana.rodriguez@email.com', '555-2004', 'Ciudad A'),
('Roberto', 'Martínez', 'roberto.martinez@email.com', '555-2005', 'Ciudad B'),
('Sofía', 'Hernández', 'sofia.hernandez@email.com', '555-2006', 'Ciudad C'),
('Pedro', 'Díaz', 'pedro.diaz@email.com', '555-2007', 'Ciudad A'),
('Lucia', 'Ramírez', 'lucia.ramirez@email.com', '555-2008', 'Ciudad B');

-- Facturas de ejemplo
INSERT INTO facturas (numero_factura, id_cliente, id_empleado, total_factura, estado_pago) VALUES
('FAC-001-2024', 1, 2, 649.98, 'Pagada'),
('FAC-002-2024', 2, 2, 99.96, 'Pagada'),
('FAC-003-2024', 3, 3, 299.99, 'Pendiente'),
('FAC-004-2024', 4, 2, 1250.00, 'Pagada'),
('FAC-005-2024', 5, 4, 45.98, 'Cancelada');

-- Detalles de facturas
INSERT INTO factura_detalle (id_factura, id_producto, cantidad, precio_unitario) VALUES
(1, 1, 1, 599.99),
(1, 2, 1, 29.99),
(2, 3, 5, 19.99),
(3, 9, 1, 299.99),
(4, 10, 1, 79.99),
(4, 2, 10, 29.99),
(5, 5, 10, 2.99),
(5, 6, 8, 1.50);

-- =====================================================
-- CREAR ÍNDICES PARA OPTIMIZACIÓN
-- =====================================================
CREATE INDEX idx_productos_categoria ON productos(id_categoria);
CREATE INDEX idx_facturas_cliente ON facturas(id_cliente);
CREATE INDEX idx_facturas_empleado ON facturas(id_empleado);
CREATE INDEX idx_factura_detalle_factura ON factura_detalle(id_factura);
CREATE INDEX idx_factura_detalle_producto ON factura_detalle(id_producto);
CREATE INDEX idx_ubicaciones_region ON ubicaciones(id_region);
CREATE INDEX idx_clientes_email ON clientes(email);
CREATE INDEX idx_empleados_email ON empleados(email);
CREATE INDEX idx_correos_fecha ON correos(fecha_envio);

-- =====================================================
-- FIN DEL SCRIPT
-- =====================================================
