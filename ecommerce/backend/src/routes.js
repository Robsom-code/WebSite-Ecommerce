const express = require("express");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");

routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.show);
routes.post("/products", ProductController.store);
routes.delete("/products", ProductController.apagar);
routes.delete("/products/:id", ProductController.destroy);





module.exports = routes;