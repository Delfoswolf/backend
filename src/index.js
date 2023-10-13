require('dotenv').config();
const 
      express = require('express'),
      app = express(),
      PORT = process.env.PORT || 4000, 
      cors = require('cors'),
      { dbConnection } = require('./config/mongo.config.js')

app.use( cors() );

dbConnection();

/**rutas */
app.use( '/api/auth', require( './routes/auth.routes.js' ) );           /** http://localhost:4001/api/auth */
// app.use( '/api/products', require( './routes/products.routes.js' ) );                /** http://localhost:4001/api/products */

/** Lanza el servidor en: http:localhost */
app.get('/', function(req, res){
        res.send(' <h1>HOME</h1> ');
})

app.get('/user', function(req, res){
        const Tania = {
            name:'Tania Medina', 
            professoion: 'Estudiante',
    } 
    res.json(Tania)
})

app.listen(PORT, () => {
    console.log(`servidor express launching en el puerto ${PORT}`);
},);