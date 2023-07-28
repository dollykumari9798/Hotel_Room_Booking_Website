const {Router} = require('express');
const userController = require('../controllers/userControllers');

const router = Router();

router.post('/profile',userController.userData_post);
router.get('/profile',userController.userData_get);
router.get('/history',userController.userHistory_get);
router.post('/bookhotel',userController.bookHotel_post);
// router.get('/hotel',userController.bookHotel_post);

module.exports =router;