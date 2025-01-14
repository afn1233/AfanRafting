import React from 'react'
import './footer.css'

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo1.png'

const quick__links =[
  {
    path:"/home",
    display:"Home"
  },
  {
    path:'#',
    display:'O nama'
  },
  {
    path:'/tours',
    display:'Ture'
  }
];

const quick__links2 =[
  {
    path:"/gallery",
    display:"Galerija"
  },
  {
    path:'/login',
    display:'Prijava'
  },
  {
    path:'/register',
    display:'Registracija'
  }
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
          <div className="logo">
            <img src={logo} alt="" />
            <p>raftingbijeli@gmail.com</p>
            <p>+387 61 138 853</p>
            <p>Lohovo bb, Bihać 77000</p>
          </div>
          </Col>

          <Col lg='3'>

            <ListGroup className="footer__quick-links">
              {
                quick__links.map((item, index) =>(
                  <ListGroupItem key={index} className="ps-0 border-0">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          
          
          </Col>
          <Col lg='3'>
          <ListGroup className="footer__quick-links">
              {
                quick__links2.map((item, index) =>(
                  <ListGroupItem key={index} className="ps-0 border-0">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
