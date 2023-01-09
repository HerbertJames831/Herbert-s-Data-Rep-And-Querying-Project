const { Router } = require("express");
const { productHandler } = require("./product/productHandler");

/**
 * req stands for Request
 * A client makes a HTTP request to a named host which is located on a server
 * The benefit of a HTTP request is a resource can be accessed on the server
 *  When making a HTTP request, the URL(Uniform Resource Locator) components are utilized by the client, this includes the information required to access the resource.
 * 
 * res stands for Response
 * HTTP responses are made by a server to a client
 * The objective of the HTTP response is the client is provided with the resource it requested 
 * Another objective of the HTTP response is it notifies the client that the action it requested has been executed
 * The third objective of the HTTP response is it lets the client know that an error arises in processing its request
 */

const  productRouter = Router();
productRouter.get("/",(req, res)=>{productHandler.findAll(req, res)} );
//The app.post() function is beneficial for HTTP POST requests being routed to the specified path with the specified callback functions  
productRouter.post("/",(req, res)=>{productHandler.add(req, res)});
//The app.get() function lets a route handler for GET requests to the URL(/:id) be defined
productRouter.get("/:id",(req, res)=>{productHandler.findById(req, res)});
//The HTTP PUT requests are being routed to the specified path along with the specified callback functions using the app.put() function
productRouter.put("/:id",(req, res)=>{productHandler.update(req, res)});
productRouter.delete("/:id",(req, res)=>{productHandler.delete(req, res)});
const appRoutes = Router();
appRoutes.use("/products", productRouter);
module.exports = {
    appRoutes
}
