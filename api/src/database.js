const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

// Configuración de las variables de entorno
dotenv.config();


// Configuración de la conexión a PostgreSQL con Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
  dialectOptions: {
    ssl: false
  },
  logging: false,
  define: {
    timestamps: true // añade created_at y updated_at a cada modelo
  }
});

// Verificación de la conexión a la base de datos
try {
  sequelize.authenticate();
  console.log('Conexión a la base de datos establecida correctamente.');
} catch (error) {
  console.error('No se pudo conectar a la base de datos:', error);
}


module.exports = sequelize
