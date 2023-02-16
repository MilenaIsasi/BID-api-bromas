const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/jokesDB", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Se establacio la conexion con mongoose existosamente"))
	.catch(err => console.log("Algo ocurrio con la conexion con mongodb", err));
