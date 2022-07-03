const { Product } = require('../models/product.model');

const getAll = async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(200).send(products);
    } catch (err) {
        return res.status(500).send(err.toString());
    } 
};

const getById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).send('Product not found'); 

        return res.status(200).send(product);
    } catch (err) {
        return res.status(500).send(err.toString());
    } 
};


const create = async (req, res) => {
    try {
  
        const product = new Product(req.body);
        const saved = await product.save();

        return res.status(200).send(saved);
    } catch (err) {
        console.error(err);
        return res.status(500).send(err.toString());
    } 
};


const update = async (req, res) => {
    try {

        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).send('Product not found');  

        product.name = req.body.name;
        product.category = req.body.category;
        product.quantity = req.body.quantity;
        product.registeredAt = req.body.registeredAt;
        product.isInStock = req.body.isInStock;

        const updated = await product.save();

        return res.status(200).send(updated);
    } catch (err) {
        return res.status(500).send(err.toString());
    } 
};


const deleter = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).send('Product Not Found');  

        await Product.findByIdAndDelete(product._id);

        return res.status(200).send(true);
    } catch (err) {
        return res.status(500).send(err.toString());
    } 
};




module.exports = {
    getAll, getById, create, update, deleter
}