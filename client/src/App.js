import React from 'react';
import './App.css';
import Footer from './components/footer';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {
  BrowserRouter as Router, //Importing react router dom
  Routes,
  Route
} from "react-router-dom";
import {AddProduct} from './pages/AddProduct'
import ProductManagement from './pages/ProductManagement';
import UpdateProduct from './pages/UpdateProduct'
//Class
class App extends React.Component {
  render() {
    return (
      <div >
          <Router>
        <Navbar  bg="warning" variant="primary"  style={{boxShadow:"2px 1px 1px #000", }}> {/* Bootstap navigation bar */}
          <Container > 
            <Navbar.Brand href="#home" ><span style={{textShadow:" .1em .1em 0 hsl(200 50% 30%)",
                minBlockSize:" 100%",
                fontFamily: 'Fugaz One, cursive',
                display: 'grid',
                fontSize: '1.8rem',
                fontWeight: '900'}}>Herbert Shop</span></Navbar.Brand>
            <Nav className="me-auto"> {/* Navigation links */}
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/products">Products Management</Nav.Link>
              <Nav.Link href="/products/add">Create</Nav.Link>
            </Nav>
          </Container>
        </Navbar>{/* End Navigation bar */}
        <Routes>  {/* Switching between route elements*/}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductManagement />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<UpdateProduct id />} />
        </Routes>
      </Router>
      </div>
    
    );
  }
}
export default App;
