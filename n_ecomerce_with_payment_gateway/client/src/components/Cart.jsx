import {React , useState , useEffect} from 'react';
import { useSelector , useDispatch} from "react-redux";
import {decNum, deleteCartData , increaseQty ,decreaseQty} from "../redux/actions/index";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


export default function Cart() {
    const myState = useSelector((state) => state);
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0);
    const navigate = useNavigate();
    
    async function handleCheckout(){
      let qty =  myState.cartData.rj.map(d=>d.qty);
      let price = myState.cartData.rj.map(d=>d.price);
      let totalPriceOfEachItem = [] ; 
      for(let i=0;i<qty.length;i++){
        totalPriceOfEachItem[i]=qty[i]*price[i];
      }
      let total = 0 ;
      for(let i=0;i<totalPriceOfEachItem.length;i++){
        total = total + totalPriceOfEachItem[i];
      }
      total = Math.floor(total);
        await setAmount(total);
    
    }
    
    useEffect(() => {
      handleCheckout();
      // eslint-disable-next-line
    }, [myState]);

    const checkoutHandler = async() => {
      try{
      const {data:{key}} =await axios.get("http://localhost:4000/api/getkey")

      const {data : {order}} = await axios.post("http://localhost:4000/api/checkout", {amount})
  

  const options = {
      key, // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Frost Software Private Ltd.",
      description: "Test Transaction",
      image: "https://avatars.githubusercontent.com/u/89183490?s=400&u=23842d1ac14138d25e8771096739851360f54243&v=4",
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
catch(err){
 navigate("/servernotres")
}
  
}
    
  
    
    return (
        <div style={{height: "100%",width: "94%"}}>
        {
          myState.cartData.rj.length === 0 ? <h1 style={{textAlign : "center"}}>No Items In Cart</h1>:
            myState.cartData.rj.map((d,i)=>{
                return(
              <div key={i} style={{marginLeft : "3%" , marginTop : "1%" , display : "flex"}}>
                <img  src={d.image} alt="noImage" style={{ height: "500px", width: "500px"}} />
                <div style={{width:"20%"  , marginLeft: "30%"}}>
                <h1 style={{marginTop : "5%"}}>{d.title}</h1>
                <p>{d.description}</p>
                <p>Category : {d.category}</p>
                <p>Price ₹{d.price}  </p>
                <div style={{display : "flex" , flexDirection : "row"}}>
                <button onClick={()=>dispatch(decreaseQty(d))}  style={{height : "30px" , width : "30px"}}>-</button>
                <h2 style={{marginTop:"-0.2%" , marginLeft : "1%" , marginRight : "1%"}}>{d.qty}</h2>
                <button onClick={()=>dispatch(increaseQty(d))} style={{height : "30px" , width : "30px"}}>+</button>
                </div>
                <p>Total Item Cost = ₹{d.price*d.qty}</p>
                <button onClick={()=>{dispatch(deleteCartData(d.id));dispatch(decNum())}}>Delete</button>
                </div>
              </div>
            )
          })
        }
        <h1 style={{textAlign : "center"}}>Total =  ₹ {amount}</h1>
        <button onClick={checkoutHandler} style={{height : "20px" , width : "80px" , display : "block" , margin : "auto" , border : "none" , backgroundColor : "green" , color : "white" , borderRadius : "10px"}}>Check Out</button>
      </div>
  )
}
