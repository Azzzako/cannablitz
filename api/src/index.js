const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const routes = require('./routes/userRoute')
const sequelize = require('./database')



// Configuración del servidor Express
const app = express();
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());
app.use('/', routes)


// Iniciar el servidor
sequelize.sync({force: true}).then(() => {
    app.listen(3001, () => console.log(`Todo ok`));
  }); 