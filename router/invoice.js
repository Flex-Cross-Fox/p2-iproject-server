const router = require('express').Router();
const invoiceController = require('../controller/invoice');

router.get('/', invoiceController.allInvoice);
router.get('/:id', invoiceController.specific);
router.post('/', invoiceController.newInvoice);

module.exports = router;