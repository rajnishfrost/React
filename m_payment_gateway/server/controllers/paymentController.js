import {instance} from "../server.js"
import crypto from "crypto"
import { Payment } from "../models/paymentModel.js";

export const checkout = async (req , res) => {

    const options = {
        amount: Number(req.body.amount * 100),  // amount in the smallest currency unit
        currency: "INR"
      };
      const order = await instance.orders.create(options);
      res.status(200).json({
        success : true ,
        order
      });
}

export const paymentVerification = async (req , res) => {
  const{razorpay_order_id , razorpay_payment_id , razorpay_signature} = req.body;


  let body=razorpay_order_id + "|" +razorpay_payment_id;
  const expectedSignature = crypto.createHmac('sha256', process.env.Razorpay_API_Secret)
                                  .update(body.toString())
                                  .digest('hex');
    const match = expectedSignature === razorpay_signature ;
    if(match){
      await Payment.create({razorpay_order_id , 
        razorpay_payment_id , 
        razorpay_signature
      });
      res.redirect(`http://localhost:3000/paymentsuccessful?reference=${razorpay_payment_id}`)
    }else{
      res.status(200).json({
        success : false 
      });
    }
    
}