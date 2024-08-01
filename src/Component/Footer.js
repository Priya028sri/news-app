import React, { Component } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export class Footer extends Component {
  render() {
    return (
      <div className="sticky-bottom">
        <footer style={{ backgroundColor: '#d1e7dd' }}>
          <div className="container py-4">
            <div className="row">
              <div className="col-12 col-md-3 my-3">
                <b>Contact Us</b>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                  <li>Email: support@newswebapp.com</li>
                  <li>Phone: +1 (123) 456-7890</li>
                  <li>Address: 123 News Avenue, Metropolis, Country</li>
                </ul>
              </div>
              <div className="col-12 col-md-3 my-3">
                <b>Legal</b>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                  <li>Terms of Service</li>
                  <li>Privacy Policy</li>
                  <li>Cookie Policy</li>
                </ul>
              </div>
              <div className="col-12 col-md-3 my-3">
                <b>Follow Us</b>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                  <li><FaFacebook /> Facebook</li>
                  <li><FaInstagram /> Instagram</li>
                  <li><FaTwitter /> Twitter</li>
                  <li><FaLinkedin /> LinkedIn</li>
                </ul>
              </div>
              <div className="col-12 col-md-3 my-3 d-flex align-items-center">
                <img src="https://cdn-icons-png.flaticon.com/256/957/957755.png" alt="NewsHUB Logo" style={{ height: '45px', width: '45px' }} />
                <span className="ms-2" style={{ fontSize: '30px' }}>NewsHUB</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
