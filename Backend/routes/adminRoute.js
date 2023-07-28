const {Router} = require('express');
const adminController = require('../controllers/adminController');

const router = Router();

router.post('/addhotel',adminController.addHotel_post);
router.get('/gethotel',adminController.getHotel_get);

module.exports =router;