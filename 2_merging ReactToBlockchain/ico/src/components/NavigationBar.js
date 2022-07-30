import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./Navbar.css"
import { useState } from 'react';

function NavigationBar() {
  const [ConnButtonText, setConnButtonText] = useState("Connect To Wallet");


  const connectWalletHandler = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      console.log('MetaMask Here!');
      window.ethereum.request({ method: 'eth_requestAccounts' })
      .then(result => {
        setConnButtonText('Wallet Connected...');
        })


    }
    else {
      setConnButtonText('Please install A Wallet...');
    }
  }
  
  return (
    <>
      <Navbar bg="black" expand="lg" id="main">
        <Container>
          <h2 style={{color:"white" , marginLeft : "-15%"}}>Initial Coin Offering</h2>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{marginLeft : "10%"}}>
              <Nav.Link href="#home" className='text-light '>Home</Nav.Link>
              <Nav.Link href="#link" className='text-light ' >About</Nav.Link>
              <Nav.Link href="#link" className='text-light ' onClick={connectWalletHandler} >{ConnButtonText}</Nav.Link>
            </Nav>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;