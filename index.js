
const express = require('express');
const cors = require('cors');
require('dotenv').config();


const { dbconection } = require('./App/config/config'); 
const app = express();

app.use(cors());

app.use(express.json());

dbconection();

app.use('/api/login', require('./App/routes/authRoute'));
app.use('/api/cita', require('./App/routes/citaRoute'));
app.use('/api/due', require('./App/routes/duenioRoute'));
app.use('/api/masc', require('./App/routes/mascotaRoute'));
app.use('/api/vet', require('./App/routes/VeterinarioRoute'));

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto ' + process.env.PORT);
})