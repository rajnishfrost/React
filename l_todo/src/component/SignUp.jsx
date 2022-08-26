import React from 'react'
import "./css/SignUp.css"
import { useDispatch } from 'react-redux'
import {saveUP} from '../redux/actions/index';
import { useState } from 'react';
import {Link , useNavigate} from "react-router-dom"

export default function SignUp() {
    const [first, setfirst] = useState()
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function onHandle(e){
        setfirst((p)=>({...p , [e.target.name] : e.target.value}));
    }

    function clickHandle(){
        if (first.password === first.repassword) {
        dispatch(saveUP(first));
        navigate("/logIn")
        }
        else{
            alert("Password Not Match");
        }
    }
    

    return (
        <div className='main'>
            <div className="sub">
                <h1>Sign Up</h1>
                <form action="">
                    <label htmlFor="">Nickname</label>
                    <br />
                    <input type="text" placeholder='Nickname' onChange={onHandle} name="nickname"/>
                    <label htmlFor="">Email</label>
                    <br />
                    <input type="email" placeholder='Enter Email' onChange={onHandle} name="email"/>
                    <label htmlFor="">Password</label>
                    <br />
                    <input type="password" placeholder='Enter PassWord' onChange={onHandle} name="password"/>
                    <label htmlFor="">Re-Enter Password</label>
                    <br />
                    <input type="password" placeholder='Re-Enter Password' onChange={onHandle} name="repassword"/>
                </form>
                <button onClick={clickHandle} >Sing Up</button>
                <Link to="/logIn"><p style={{textAlign:"center" , color : "white"}}> Already Have Account </p></Link>
            </div>
        </div>
    )
}
