const { invoice, recipient, sale, stockProduct } = require('../models');

class invoiceController{
    //stockProduct sale recipient
    static allInvoice(req, res, next){
        invoice.findAll({
            include: [
                {
                    model: recipient,
                    attributes: [ 'name_of_recipient', 'name_of_company', 'status' ]
                },
                {
                    model: sale,
                    attributes: [  'quantity', 'discount', 'after_discount', 'total', 'invoice_no' ],
                    include: [
                        { 
                            model: stockProduct,
                            attributes: ['product_name', 'available_quantity', 'cost_of_goods_sold', 'category', 'SKU'] 
                        }
                    ]
                }
            ],
            order: [['date','DESC']]
        })
        .then((data) => {
            // console.log(data);
            res.status(200).json(data)
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err)
        })
    }
    //stockProduct sale recipient
    static specific(req, res, next){
        console.log(req.params.id,'<--------');
        invoice.findOne({
            where: { id: req.params.id } ,
            include: [
                {
                    model: recipient,
                    attributes: [ 'name_of_recipient', 'name_of_company', 'status' ]
                },
                {
                    model: sale,
                    attributes: [  'quantity', 'discount', 'after_discount', 'total', 'invoice_no' ],
                    include: [
                        { 
                            model: stockProduct,
                            attributes: ['product_name', 'available_quantity', 'cost_of_goods_sold', 'category'] 
                        }
                    ]
                }
            ]
        })
        .then((data) => {
            // console.log(data);
            console.log(data);
            res.status(200).json(data)
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err)
        })
    }
    
    static newInvoice(req, res, next){
        console.log(req.body);
        let arrayForPromiseAll = []
        invoice.create({date: new Date, recipient_id: req.body[0].recipientName})
        .then((data) => {
            console.log('di line 32');
            console.log(data);
            for(let a = 0; a < req.body.length; a++){
                let penjualan = sale.create({ item_id: req.body[a].prudctid, quantity: req.body[a].quantity, discount: req.body[a].discount, total_discount: (req.body[a].quantity * (req.body[a].hargaJual * (req.body[a].discount / 100).toFixed(2))), after_discount: req.body[a].afterDiscount, total: req.body[a].totalAmount, invoice_no: data.id, createdAt: new Date, updatedAt: new Date })
                arrayForPromiseAll.push(penjualan)    
            }
            return Promise.all(arrayForPromiseAll)
        })
    .then((data) => {
            console.log('di line 45');
            console.log(data);
            res.status(200).json(data)
        })
        // .then((data) => {
            // return stockProduct.findAll()
        // })
        // .then((data) => {
            // for(let d = 0; d < data.length; d++) {

            // }
            // let kurangStock = []
            // for(let b = 0; b < req.body.length; b++){
            //     let stok = stockProduct.update({}, { where: { id: req.body.prudctid }})
            // }
        // })
        .catch((err) => {
            console.log('di line 50');
            console.log(err);
            res.status(400).json(err)
        })
    }
};

module.exports = invoiceController;