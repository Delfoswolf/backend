require( 'dotenv' ).config();
const
    express = require( 'express' ),
    app = express(),
    PORT = process.env.PORT || 4000,
    cors = require( 'cors' );

app.use( cors() );          // Implementacion de un Middleware en Express

/ Rutas */
app.get( '/',function( req, res ) {
    res.send( '<h1>home</h1>' );
});
app.get( '/user', function( req, res ) {
    const luis = {
        name: 'Luis Zarate',
        profession: 'Ingeniero'
    }
    res.json( luis );
});


/ Ejecuta  */
app.listen( PORT, () => {
    console.log( Servidor  lanzado... express en el puerto ${ PORT } );
} );