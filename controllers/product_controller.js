//added path to schema model
const Product = require('../model/product');

//Fetch List of products
module.exports.list = async function(req,res){
    try{
        let product = await Product.find()
        return res.status(200).json({
            data:{
                message: "Products",
                products: product

            }
        })
    }catch(err){
        console.log('Error in fetching List of products',err);
        return res.send('Error in fetching List of products'+ err);

    }
}

//Create Product
module.exports.create = async function(req,res){
    try{
        let product = new Product({
            name: req.body.name,
            quantity: req.body.quantity,
        });
        await product.save();
        return res.status(200).json({
            data:{
                message: "Product-created",
                products: product
            }
        })
    }catch(err){
        console.log('Error in creating product', err);
        return res.send('Error in creating products'+err);
    }
}

//Delete Product
module.exports.delete = async function(req,res){
    try{
        let product = await Product.findById(req.params.id);
        await product.remove();
        return res.status(200).json({
            data:{
                message: "Product removed from list",
            }
        })
    }catch(err){
        console.log('Error in removing products', err);
        return res.send('Error in removing Products from list'+err);
    }
}

//update quantity
module.exports.update = async function(req,res){
    try{
        let product = await Product.findById(req.params.id);
        //here using req.query to update quantity, NOTICE using number for query
        let num = parseInt(req.query.number);
        if(product.quantity + num < 0){
            return res.status(200).json({
                data:{
                    message: "Try Again! Product quantity could not be less then 0",
                }
            })
        }else{
            product.quantity=product.quantity+num
            await product.save()
            return res.status(200).json({
                data:{
                    message: "Product Quantity updated successfully",
                    products: product
                }
            })
        }
    }catch(err){
        console.log('Error in updating quantity of the product',err);
        return res.send('Error in updating quantity of the product:::'+err);
    }
}
//home
module.exports.home = async function(req,res){
    try{
        return await res.send('<h1 style="color:skyblue;text-align:center">Hello Admin</h1>')
    }catch(err){
        console.log('Error at home',err);
        return res.send('Error at home page:'+err);
    }
}