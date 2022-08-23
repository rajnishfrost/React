import {BrowserRouter as Router , Routes , Route } from "react-router-dom"
import Home from "./Home";
import PaymentSuccessful from "./PaymentSuccessful";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/paymentsuccessful" element={<PaymentSuccessful/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
