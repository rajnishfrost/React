import React from 'react';
import axios from "axios";

function Home() {
    const amount = 330 ;

    const checkoutHandler = async() => {
        const {data:{key}} =await axios.get("http://localhost:4000/api/getkey")

        const {data : {order}} = await axios.post("http://localhost:4000/api/checkout", {amount})
    

    const options = {
        key, // Enter the Key ID generated from the Dashboard
        amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Acme Corp",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: "http://localhost:4000/api/paymentVerification",
        prefill: {
            name: "Gaurav Kumar",
            email: "gaurav.kumar@example.com",
            contact: "9999999999"
        },
        notes: {
            address: "Razorpay Corporate Office"
        },
        theme: {
            color: "#121212"
        }
    };
    const razor = new window.Razorpay(options);
    razor.open(); 
    
 }


  return (
    <div className="App" style={{display : "flex" , justifyContent:"center"}}>
      <div style={{height : "400px" , width : "400px" }}>
        <img src="https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg" alt="" style={{height : "300px" , width : "300px" , display : "block" , margin : "auto"}}/>
        <p style={{textAlign:"center"}}>₹ {amount}</p>
        <button onClick={checkoutHandler} style={{height : "25px" , width : "40px" , display : "block" , margin : "auto"}}>Buy</button>
      </div>
    </div>
  )
}

export default Home