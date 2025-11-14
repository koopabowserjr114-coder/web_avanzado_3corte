import app from './app.js';
import { testConnection } from './config.js';
import categoriasRoutes from './routes/categorias.routes.js';

// Prueba de conexión a la base de datos
await testConnection();

// Importar y usar rutas
app.use('/api/categorias', categoriasRoutes);

// Ruta raíz - bienvenida
app.get('/', (req, res) => {
  res.json({
    message: '¡Bienvenido a The Company Web Server!',
    version: '1.0.0',
    status: 'running'
  });
});

// Ruta para manejar errores 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Ruta no encontrada'
  });
});

// Función principal asíncrona
const main = async () => {
  try {
    const PORT = app.get('port');
    app.listen(PORT, () => {
      console.log(`\n╔════════════════════════════════════╗`);
      console.log(`║  🚀 The Company Web Server 🚀    ║`);
      console.log(`║  is running on port ${PORT}          ║`);
      console.log(`║  http://localhost:${PORT}           ║`);
      console.log(`╚════════════════════════════════════╝\n`);
    });
  } catch (error) {
    console.error('Error iniciando el servidor:', error);
    process.exit(1);
  }
};

// Invocar la función principal
main();
