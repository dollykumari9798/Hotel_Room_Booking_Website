const {Router} = require('express');
const hotelController = require('../controllers/hotelController')

const router = Router();

router.get('/all',hotelController.cityData_get);
router.get('/',hotelController.hotel_get);

module.exports =router;