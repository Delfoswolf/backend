// import second from 'express';  // ESModule

const express = require ( 'express' ); //Common JS

const app = express();


app.get( '/', ( req, res ) => {
    res.send( '<h1>home</h>' );
});

app.get( '/contact', ( req, res ) => {
    res.send( '<h1>Contact</h>' );
});

app.listen( 3000, () => {
    console.log( 'Servidor escuchando en el puerto 3000' );
});