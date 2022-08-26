import TodosMainPage from "./component/TodosMainPage";
import "./App.css"
import LogIn from "./component/LogIn";
import SignUp from "./component/SignUp";
import {BrowserRouter as Router , Route , Routes} from "react-router-dom";
import NotSignUp from "./component/NotSignUp";
import { useState , useEffect} from "react";
import { useSelector } from "react-redux";

function App() {
  const activeUser = useSelector(state => state.saveUP.activeUser);  
  const[check , setCheck] = useState(false);

  useEffect(() => {
    if(activeUser === null){
      console.log("not log");
    }
    else if(activeUser.length === 0){
      console.log("not log");
    }
    else{
      setCheck(true);
    }
  }, [activeUser])
  
  
  return (
    <div className="mainDiv">
      <Router>
        <Routes>
          <Route exact path="/" element={<> <SignUp/> </>} />
          <Route exact path="/logIn" element={<> <LogIn/> </>} />
          <Route exact path="/home" element={<> {check === true ?<TodosMainPage /> : <NotSignUp/> } </>} />
          <Route exact path="/notSignUp" element={<NotSignUp/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
