const {Router} = require('express');
const paymentController = require('../controllers/paymentController')

const router = Router();

router.post('/checkout',paymentController.checkout_post)
router.post('/verification',paymentController.paymentVerification_post)

module.exports = router;