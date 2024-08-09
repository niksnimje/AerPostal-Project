import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaClipboardList, FaRedo, FaGift, FaCommentDots, FaPhone, FaEnvelope, FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from 'react-icons/fa';


function Footer() {
  return (
    <footer className="bg-light pt-5 pb-3 ">
      <Container>
        <Row>
          <Col md={3}>
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li><a href="#"><FaMapMarkerAlt className="me-2" />Store Locator</a></li>
              <li><a href="#"><FaClipboardList className="me-2" />Order Status</a></li>
              <li><a href="#"><FaRedo className="me-2" />Start a Return</a></li>
              <li><a href="#"><FaGift className="me-2" />Gift Cards/Balance</a></li>
              <li><a href="#"><FaCommentDots className="me-2" />Feedback</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li><a href="#">Help Desk & FAQ</a></li>
              <li><a href="#">Return & Exchange Policy</a></li>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Buy Online, Pick Up In Store</a></li>
              <li><a href="#">Student Discount</a></li>
              <li><a href="#">Coupons & Promos</a></li>
              <li><a href="#">Size Charts</a></li>
              <li><a href="#">Affiliate Program</a></li>
              <li><a href="#">Your Privacy Choices</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Questions?</h5>
            <ul className="list-unstyled">
              <li>Call Us</li>
              <li>1.877.289.2376</li>
              <li><a href="#">Contact Us</a></li>
            </ul>
            <h5>About Us</h5>
            <ul className="list-unstyled">
              <li><a href="#">About Aéropostale</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Supply Chain</a></li>
              <li><a href="#">Aero Impact</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Get The Latest Styles & Offers:</h5>
            <Form className="d-flex mb-3">
              <Form.Control type="email" placeholder="Enter Email" className="me-2" />
              <Button variant="primary">Subscribe</Button>
            </Form>
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li><a href="#"><FaInstagram className="me-3" /></a></li>
              <li><a href="#"><FaTwitter className="me-3" /></a></li>
              <li><a href="#"><FaFacebookF className="me-3" /></a></li>
              <li><a href="#"><FaYoutube className="me-3" /></a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}


export default Footer;




