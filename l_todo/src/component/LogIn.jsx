import {React , useState} from 'react'
import { useSelector } from 'react-redux';
import { useNavigate ,Link} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/actions/index';

export default function LogIn() {
    const [first, setfirst] = useState();
    const myState = useSelector(state => state.saveUP)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function onHandle(e) {
        setfirst((p) => ({ ...p, [e.target.name]: e.target.value }));
      }
      const handleClick = async () => {
        
          let check = await myState.users.find((d) => {
            return d.email === first.email && d.password === first.password;
          });
          if (check) {
            const detail = myState.users.find((d) => {
              return d.email === first.email && d.password === first.password;
            });
            dispatch(logIn({ email: detail.email , nickname : detail.nickname}));
            navigate("/home");
          } else {
            navigate("/notSignUp");
          }
        
        
      };
   
    return (
        <div className='main'>
            <div className="sub">
                <h1>Log In</h1>
                <form action="">
                    <label htmlFor="">Email</label>
                    <br />
                    <input type="email" placeholder='Enter Email' onChange={onHandle} name="email" />
                    <br />
                    <label htmlFor="">Password</label>
                    <br />
                    <input type="password" placeholder='Enter PassWord' onChange={onHandle} name="password" />
                </form>
                <button onClick={handleClick}>Log In</button>
                <Link to="/"><p style={{textAlign:"center" , color : "white"}}> Haven't Account </p></Link>
            </div>
        </div>
    )
}
