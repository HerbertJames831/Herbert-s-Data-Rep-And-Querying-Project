var{ Product} = require("../models")
class ProductService{
    add(product){
        return new Promise((resolve, reject)=>{
            Product.create(product,(err, result)=>{
                if(err){
                    if(err.message.includes("E11000")){
                        reject(`Product with name: ${product.name} already exists.`);
                    }else{
                        resolve(err);
                    }
                }
                resolve(result);
        });
       })
    }
    findById(id){
        return new Promise((resolve, reject)=>{
            Product.findOne({_id: id}).exec((err, result)=>{
                if(err){
                    reject( `Product with _id: ${id} does not exists.`);
                }
                resolve(result);
            })
        });
        
    }


    async findAll(){
       return new Promise((resolve, reject)=>{
            Product.find({}).exec((err, result)=>{
                if(err){
                    reject( "Error has occured while fetching data");
                }
                    resolve(result);
                
       });
       }) 
    }


    delete(id){
      new Promise((resolve, reject)=>{
        Product.findOneAndRemove({_id: id}, (err, result)=>{
            if(err){
                reject(`Product with ID: ${id} doesn't exists.`);
            }
            resolve(result);
        })
      })
    }


    update(id, p){    
        return new Promise((resolve, reject)=>{
            Product.findOneAndUpdate({_id: id}, {
                $set:{name: p.name,  price: p.price, quantity:p.quantity,category: p.category,description: p.description }},
                (err, result)=>{
                    if(err){
                        reject(`Product with ID: ${id} does't exists.`);
                    }
                    resolve(result);
                }
            )
        });
    }

}
const productService = new ProductService();
module.exports = {productService};