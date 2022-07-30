import React from "react";
import NavigationBar from "./components/NavigationBar";
import TimeStamp from "./components/TimeStamp";
import BuyMainDiv from "./components/BuyMainDiv";
import "./App.css";
import Pict from "./components/imgs/rider.png";

function App() {
  return (
    <div>
      <div style={{ backgroundColor: "black", height: "50%" }}>
        <NavigationBar />
        <img
          src={Pict}
          alt="not Found"
          style={{
            height: "54%",
            width: "48%",
            marginLeft: "50%",
            marginTop: "-5%",
          }}
        />
        {<TimeStamp />}
      </div>
      <div id="abhay">
        <div style={{height:"50%" , width:"60%", marginTop:"8%" , marginLeft:"2%"}}>
          <h1 style={{ color: "white" }}>About Token</h1>
          <ul>
            <li style={{ color: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              provident, iste dignissimos quo nihil suscipit rem iusto quaerat
              facilis harum.
            </li>
            <br />
            <li style={{ color: "white" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas neque, saepe voluptatibus deserunt, ipsum eos ad minima quaerat quos soluta ut et consectetur ullam sapiente mollitia porro non iste tenetur. Cumque molestiae eligendi expedita aliquid consequatur autem, natus hic sapiente harum quisquam fuga earum eveniet sit aliquam laborum debitis maxime in eum minima voluptatibus dolores placeat voluptate magnam. Rem vitae ad adipisci ipsum ab alias in a! Rerum alias modi hic eligendi, eos veritatis voluptatem deleniti ab id. Quo eaque eligendi eum vero. Necessitatibus autem minima odio ducimus laboriosam mollitia sed culpa optio fugiat, repellendus nisi nostrum cum aperiam quam?
            </li>
            <br />
            <li style={{ color: "white" }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum architecto minus dolor, provident ratione, fugit saepe facere dicta sit laboriosam, ex cum magnam perferendis. Quam sequi quas at. Quia, asperiores minima? Est eligendi soluta ad earum atque quibusdam quia minus reprehenderit asperiores? Praesentium necessitatibus quis et? Est eligendi iusto, sint eaque omnis aliquam voluptas porro commodi ea expedita tenetur voluptates suscipit soluta, eius velit accusamus libero facilis ut, voluptatum repellat!</li>
            <br />
            <li style={{ color: "white" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto odio quibusdam dolores quisquam necessitatibus distinctio voluptatem similique ullam nam, quia, error reiciendis nemo? Sequi commodi quis error beatae architecto, inventore a ipsam veniam quam corrupti. Necessitatibus numquam tempora dolore deserunt voluptatem modi pariatur vero porro, dicta quibusdam tenetur voluptates totam nostrum adipisci quae praesentium perferendis, minus accusantium repellendus sit at libero. Eligendi aliquam, a officiis numquam aperiam sed iure facilis.</li>
          </ul>
        </div>
        {<BuyMainDiv />}
      </div>
    </div>
  );
}

export default App;
