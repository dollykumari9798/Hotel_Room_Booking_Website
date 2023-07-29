// const instance = require('../index/')
const Razorpay = require("razorpay");

const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY_ID,
    key_secret: process.env.RAZORPAY_API_KEY_SECRET,
});

module.exports.checkout_post = async (req,res)=>{
    const amount = Number(req.body.amount * 100)
    var options = {
        amount: amount,  // amount in the smallest currency unit
        currency: "INR",
      };
      const order = await instance.orders.create(options);

      console.log(order);
      res.send({success:true, order})
};

module.exports.paymentVerification_post = async (req,res)=>{
      res.redirect('http://127.0.0.1:5173/user/history')
};