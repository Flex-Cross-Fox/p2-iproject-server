const router = require('express').Router();
const recipientController = require('../controller/recipient');

router.get('/', recipientController.allRecipient); //berhasil
router.post('/', recipientController.newRecipient);

module.exports = router;