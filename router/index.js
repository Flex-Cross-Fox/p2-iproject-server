const router = require('express').Router();

const routerInvoice = require('./invoice');
const routerRecipient = require('./recipient');
const routerStockProduct = require('./stockProduct');
const routerUser = require('./user');
const { authentic } = require('../middleware/authentic')

router.use('/user', routerUser);

router.use(authentic);

router.use('/invoice', routerInvoice);
router.use('/recipient', routerRecipient);
router.use('/stock', routerStockProduct);

module.exports = router;