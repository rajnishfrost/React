import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./Navbar.css"

function NavigationBar() {
  
  return (
    <>
      <Navbar bg="black" expand="lg" id="main">
        <Container>
          <h2 style={{color:"white" , marginLeft : "-15%"}}>Initial Coin Offering</h2>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color: "white"}} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className='text-light '>Home</Nav.Link>
              <Nav.Link href="#link" className='text-light '>Buy_Crypto</Nav.Link>
              <Nav.Link href="#link" className='text-light '>Trade</Nav.Link>
              <Nav.Link href="#link" className='text-light '>IDO</Nav.Link>
              <Nav.Link href="#link" className='text-light '>Activities</Nav.Link>
              <Nav.Link href="#link" className='text-light '>About</Nav.Link>
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