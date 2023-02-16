const express = require("express");
const app = express();
const port = 8000;

//ruta de moongose
require('./config/mongoose.config');

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.use(require('./routers/jokes.routes'))


app.listen( port, () => console.log(`Listening on port: ${port}`) );