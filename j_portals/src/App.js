import Modal from "./Modal";
import { useState } from "react";
const model = {
  position : "relative" ,
  zIndex : 1
}

const other ={
  position : "relative" ,
  backgroundColor :"red" ,
  zIndex : 2 ,
  padding : "10px"
}

function App() {
  const [isOpen, setIsopen] = useState(false);

  return (
    <>
    <div style={model}>
      <button onClick={() => setIsopen(true)}> Open Model</button>
      <Modal open={isOpen} onClose ={() => setIsopen(false)}>
        This Is The Model
      </Modal>
    </div>
    <div style={other}>
      Other Content
    </div>
    </>
  );
}

export default App;
