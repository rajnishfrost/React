import Card from 'react-bootstrap/Card';
import { useState } from "react";
 function CalculateTokens() {
  const [items, setItems] = useState(0);

  const handleChange = event => {
    setItems(event.target.value);
  };
  const check = 100;
  let a = items;
  function calculatedToken() {
    a = parseFloat(a);
    let numTokens1 = 0;
    let numTokens2 = 0;
    let numTokens3 = 0;
    let e_numTokens1 = 0;
    let e_numTokens2 = 0;
    let e_numTokens3 = 0;
    let e_numTokens4 = 0;
    let rj = 0;
    if (a > (check * 25) / 100) {
      numTokens1 = a - (check * 25) / 100;
      e_numTokens1 = (check * 25) / 100;
      rj = rj + e_numTokens1;
      if (numTokens1 > (check * 50) / 100) {
        numTokens2 = numTokens1 - (check * 50) / 100;
        e_numTokens2 = (check * 25) / 100;
        rj = rj + e_numTokens2;
      } else {
        e_numTokens2 = numTokens1 / 2;
        rj = rj + e_numTokens2;
      }
      if (numTokens2 > (check * 75) / 100) {
        numTokens3 = numTokens2 - (check * 75) / 100;
        e_numTokens3 = (check * 25) / 100;
        rj = rj + e_numTokens3;
      } else {
        e_numTokens3 = numTokens2 / 3;
        rj = rj + e_numTokens3;
      }
      if (numTokens3 >= (check * 100) / 100) {
        e_numTokens4 = (check * 100) / 100;
        rj = rj + e_numTokens3;
      } else {
        e_numTokens4 = numTokens3 / 4;
        rj = rj + e_numTokens4;
      }
    } else {
      rj = rj + a;
    }
    setItems(rj);
  }
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Calculate Tokens</Card.Title>
        <input type="number" placeholder='Enter Value In Ethers' onChange={handleChange} />
        <br />
        <br />
        <h6>You Will Get Tokens : {items}</h6>
        <br />
        <button onClick={calculatedToken}>Calculated</button>
      </Card.Body>
    </Card>
    </>
  );
}

export default CalculateTokens;