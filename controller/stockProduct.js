const { Op } = require("sequelize");
const { stockProduct } = require('../models');

class stockProductController{
    static addNewStock(req, res, next){
        const { product_name, available_quantity, cost_of_goods_sold, SKU, category } = req.body
        stockProduct.create({ product_name, available_quantity, cost_of_goods_sold, SKU, category })
        .then((data) => {
            console.log(data);
            res.status(200).json(data)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err)
        })
    }

    static addStock(req, res, next){
        console.log('line 19');
        stockProduct.findOne({ where: { id: req.params.id }})
        .then((data) => {
            console.log('line 22');
            return data
        })
        .then((data) => {
            const qtyDulu = data.available_quantity
            data.available_quantity =  data.available_quantity + Number(req.body.quantity)
            data.cost_of_goods_sold = Math.round(( (data.cost_of_goods_sold * qtyDulu) + (Number(req.body.price) * Number(req.body.quantity)) ) / data.available_quantity)
            return stockProduct.update({available_quantity: data.available_quantity, cost_of_goods_sold: data.cost_of_goods_sold }, {where: {id: req.params.id}})
        })
        .then((data) => {
            console.log('line 32');
            res.status(200).json(data)
        })
        .catch((err) => {
            console.log('line 36');
            console.log(err);
            res.status(500).json(err)
        })
    }

    static delete(req, res, next){
        stockProduct.update({ available_quantity: 0 }, { where: { id: req.params.id } })
        .then((data) => {
            console.log(data);
            res.status(200).json(data)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err)
        })
    }

    static editPage(req, res, next){
        stockProduct.findOne({where: {id: req.params.id}})
        .then((data) => {
            console.log(data);
            res.status(200).json(data)
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err)
        })
    }

    static edit(req, res, next){
        stockProduct.findOne({ where: { SKU: req.body.SKU } })
        .then((data) => {
            console.log(data);
            const { product_name, available_quantity, cost_of_goods_sold, SKU, category } = req.body
            if(!product_name){
                product_name = data.product_name
            }
            if(!available_quantity){
                available_quantity = data.available_quantity
            }
            if(!cost_of_goods_sold){
                cost_of_goods_sold = data.cost_of_goods_sold
            }
            if(!SKU){
                SKU = data.SKU
            }
            if(!category){
                category = data.category
            }
            return stockProduct.update({ product_name, available_quantity, cost_of_goods_sold, SKU, category })
        })
        .then((data) => {
            console.log(data);
            res.status(200).json(data)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    static allStock(req, res, next){
        stockProduct.findAll({ order: [['id','ASC']],where:
            { available_quantity: {
                [Op.gte]: 1
            }}
        }
        )
        .then((data) => {
            console.log(data);
            res.status(200).json(data)
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err)
        })
    }

    static DetailStock(req, res, next){
        stockProduct.findOne({ where: { id: req.params.id} })
        .then((data) => {
            console.log(data);
            res.status(200).json(data)
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err)
        })
    }
};

module.exports = stockProductController;