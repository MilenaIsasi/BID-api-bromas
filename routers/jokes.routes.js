const express = require("express");
const {  listaBromas, buscarBromas, crearBromas, actualizarBromas, eliminarBroma} = require("../controllers/jokes.controller");
const Joker = require("../models/jokes.model");
const app = express();

app.get("/api/bromas/", listaBromas);
app.post("/api/bromas/" , crearBromas)
app.get("/api/bromas/buscar/:id", buscarBromas);
app.put("/api/bromas/:id", actualizarBromas);
app.delete("/api/bromas/:id", eliminarBroma)




module.exports = app;