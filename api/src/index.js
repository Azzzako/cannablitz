const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const routes = require('./routes/userRoute')
const login = require('./routes/loginRoute')
const sequelize = require('./database')
const cloudinary = require('cloudinary').v2
const dotenv = require('dotenv');
const product = require('./routes/productRoute');


dotenv.config();


//Configuracion de Cloudinary para almacenar imagenes de los productos
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
})


// Configuración del servidor Express
const app = express();
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());
app.use('/user', routes)
app.use('/login', login)
app.use('/product', product)


// Iniciar el servidor
sequelize.sync({force: true}).then(() => {
    app.listen(3001, () => console.log(`Todo ok`));
  }); 
