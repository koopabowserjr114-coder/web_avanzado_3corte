import mysql from 'mysql2/promise';

// Configuración de la conexión a MySQL
export const connection = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'inventario',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Función para probar la conexión
export const testConnection = async () => {
  try {
    const conn = await connection.getConnection();
    console.log('✓ Conexión a base de datos exitosa');
    conn.release();
  } catch (error) {
    console.error('✗ Error conectando a la base de datos:', error.message);
  }
};

export default connection;
