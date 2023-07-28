const Hotel = require('../models/Hotels')

module.exports.addHotel_post = async (req, res) => {
    const hotelData = req.body;
    // console.log(data);
    
    try{
        const hotel = await Hotel.create(hotelData);
        console.log(hotel);
        res.status(201).json({message:'hotel added'})
    }catch(err){
        console.log(err);
        res.send('hotel not added')
    }
};

module.exports.getHotel_get = async (req, res) => {
    const hotelData = req.body;
    // console.log(data);
    
    try{
        const hotel = await Hotel.find();
        hotel.forEach(ele=>{
            console.log(ele._id,ele.name,ele.city);
        })
        res.status(201).json({message:'hotel retrieved'})
    }catch(err){
        console.log(err);
        res.send('hotel not added')
    }
};