const Hotel = require("../models/Hotels");

module.exports.cityData_get = async (req, res) => {
    const cityName = req.query.city;
    console.log(cityName);
    try {
        const hotels = await Hotel.find({ city: cityName });

        var hotelRes = [];
        hotels.forEach((ele) => {
            var hotelData = {
                id:'',
                name: "",
                rating: 2,
                location: "",
                avg: 4,
                features:[],
            };
            hotelData.id = ele._id;
            hotelData.name = ele.name;
            hotelData.rating = ele.rating;
            hotelData.location = ele.location;
            hotelData.avg = ele.rooms[0].price;
            hotelData.features = ele.features;

            hotelRes.push(hotelData);
        });
        res.send(hotelRes);
    } catch (err) {
        console.log(err);
        res.status(404).json({msg:"not found"});
    }
};

module.exports.hotel_get = async (req, res) => {
    const hotelId = req.query.id;
    const hotel = await Hotel.findById(hotelId);
    // const response = {
    //     name: hotel.name,
    //     data: getRoomType(hotel),
    // };
    res.send(hotel);
};

function getRoomType(hotel){
    const data=[]
    hotel.rooms.forEach(ele=>{
        var individual={
            type:ele.type,
            title:ele.title,
            qty:ele.qty,
            price:ele.price
        }
        data.push(individual);
    })
    return data;
}