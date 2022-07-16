import Card from 'react-bootstrap/Card';

function GetBalance() {
  const style = {
    
  }
  return (
    <div style={style}>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Get Balance of A Account</Card.Title>
        <p></p>
        <button> Get Balance</button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default GetBalance;