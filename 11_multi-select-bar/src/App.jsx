import React from "react";

function App() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "Dragon Ball Z", label: "Dragon Ball Z" },
    { value: "Inazuma Eleven", label: "Inazuma Eleven" },
    { value: "Ben 10", label: "Ben 10" },
    { value: "Naruto", label: "Naruto" },
    { value: "Doraemon", label: "Doraemon" },
    { value: "Chhota Bheem", label: "Chhota Bheem" },
    { value: "Red", label: "Red" },
    { value: "Blue", label: "Blue" },
  ];

  return (
    <div className="App">
      <input type="text" />
      {
        options.map((d , i)=>{
          return (
            <div key={i}>
              <input type="text" value={d.value}/>
            </div>
            )
        })
      }
    </div>
  );
}

export default App;
