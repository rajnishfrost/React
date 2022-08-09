import {BrowserRouter as Router , Routes , Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Product from "./components/Product";
import MensClothing from "./components/MensClothing";
import WomensClothing from "./components/WomensClothing";
import Jeweleries from "./components/Jeweleries";
import Electronics from "./components/Electronics";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  return (
    
    <div className="App" >
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path = "/" element={<>  <Product/> </>}/>
        <Route exact path = "/mensClothing" element={<> <MensClothing/> </>}/>
        <Route exact path = "/womensClothing" element={<><WomensClothing/> </>}/>
        <Route exact path = "/jeweleries" element={<> <Jeweleries/> </>}/>
        <Route exact path = "/electronics" element={<> <Electronics/> </>}/>
        <Route exact path = "/cart" element={<> <Cart/> </>}/>
      </Routes>
     </Router>
   <Footer/>
    </div>
  );
}

export default App;
