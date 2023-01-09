const { Product } = require("../models");
const { productService } = require("./productService");

class ProductHandler{
    constructor(service){
        this.service = service
    }
    
    async add(req, res){
        const data = req.body
        try {
           const result = await this.service.add(data)
           return res.status(201).json(result);
        } catch (error) {
            return res.status(400).json(this.appError(error))
        }
    }

    async findById(req, res){
        const id = req.params.id;
        try {
           const product = await this.service.findById(id)
           return res.status(200).json(product);
        } catch (error) {
            return res.status(400).json(this.appError(error))
        }
    }


    async findAll(req, res){
        try {
           const products = await this.service.findAll()
           return res.status(200).json(products);
        } catch (error) {
            return res.status(400).json(this.appError(error))
        }
    }


    async delete(req, res){
        const id = req.params.id;
        try {
           const product = await this.service.delete(id)
           return res.status(204).json(product);
        } catch (error) {
            return res.status(400).json(this.appError(error))
        }
    }


    async update(req, res){
        const id = req.params.id;
        const product = req.body
        try {
           const result = await this.service.update(id,product)
           return res.status(201).json(result);
        } catch (error) {
            return res.status(400).json(this.appError(error))
        }
    }

    appError(message){
        return {"errors":message, "success":false}
    }
}
const productHandler = new ProductHandler(productService);
module.exports = {productHandler};