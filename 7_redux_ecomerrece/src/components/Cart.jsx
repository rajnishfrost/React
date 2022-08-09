import React from 'react';
import { useSelector , useDispatch} from "react-redux";
import { useState} from 'react';
import { decNum , incNum , deleteData} from "../actions/index";

export default function Cart() {
    const myState = useSelector((state) => state.savingData);
    const dispatch = useDispatch();
    const [first, setfirst] = useState(1);

    function inc(){
        setfirst(first+1);
        dispatch(incNum());
    }
    
    function dec(){
        setfirst(first-1);
        dispatch(decNum())
    }
    
    return (
        <div style={{height: "100%",width: "94%"}}>
        {
            myState.rj.map((d,i)=>{
                return(
              <div key={i} style={{marginLeft : "3%" , marginTop : "1%" , display : "flex"}}>
                <img  src={d.image} alt="noImage" style={{ height: "500px", width: "500px"}} />
                <div style={{width:"20%"  , marginLeft: "30%"}}>
                <h1 style={{marginTop : "15%"}}>{d.title}</h1>
                <p>{d.description}</p>
                <p>Category : {d.category}</p>
                {/* <p>Rating {d.rating.rate}</p> */}
                <p>Price {d.price} ETH </p>
                <div style={{display : "flex" , flexDirection : "row"}}>
                <button onClick={dec} style={{height : "30px" , width : "30px"}}>-</button>
                <h2 style={{marginTop:"-0.2%" , marginLeft : "1%" , marginRight : "1%"}}>{first}</h2>
                <button  onClick={inc}  style={{height : "30px" , width : "30px"}}>+</button>
                </div>
                <p>Total Cost = {d.price*first}</p>
                <button onClick={()=>{dispatch(deleteData(d.id))}}>delete</button>
                </div>
              </div>
            )
          })
        }
      </div>
  )
}
