import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState({
    tittle : "",
    desc : ""
  });
  setCount("devid");
  // console.log(useState(0));
  return (
   <>
   <p>You clicked {count} times</p>
      <button >
        Click me
      </button>
      
   </>
  );
}

export default App;
