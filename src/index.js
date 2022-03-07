import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';
import './grid.css';

import Logo from './images/Turners Logo.png'
import HeaderCar from './images/Red Car.png'
import LocationIcon from './images/Location Icon.png'
import ChineseLanguageIcon from './images/Chinese.png'
import SearchIcon from './images/SearchIcon.png'
import Tina from './images/Tina.png'

export default function App() {
  return (
    <>
      <div className="main-grid">
        {/*SECTION 1 (header)*/}
        <div className="grid-item" id="header-grid">
          <div className="header-grid-item" id="header-left">
            <img src={Logo}/>
            <p className="header-phone-number">Call 0800 887 637</p>
          </div>
          
          <div className="header-grid-item">
            <p id="title">Insure your car now!</p>
          </div>

          <div className="header-grid-item" id="header-right">
            <div>
              <img src={HeaderCar} />
            </div>
            <div className="header-below-car">
              <img src={LocationIcon} className="header-below-car-item" />
              <p className="header-below-car-item" id="find-us">Find Us</p>
              <img src={ChineseLanguageIcon} className="header-below-car-item"/>
              <p className="header-below-car-item">Login or Register</p>
            </div>
          </div>
          
        </div>
        {/*SECTION 2 (navigation)*/}
        <div className="grid-item" id="navigation">
          <div className="nav-container">
            <img src={SearchIcon} className="nav-item" id="nav-icon"/>
            <p className="nav-item">Find a Car</p>
            <p className="nav-item">How to Buy</p>
            <p className="nav-item">Sell your Car</p>
            <p className="nav-item">Finance</p>
            <p className="nav-item" id="active-item">Insurance</p>
            <p className="nav-item">Careers</p>
            <p className="nav-item" id="nav-right">Services and Information</p>
            <p className="nav-item" id="nav-right">Auctions and Events</p>
          </div>
        </div>
        {/*SECTION 3 (main content)*/}
        <div className="grid-item" id="main-content">
          <div className="main-content-grid">
            <div className="main-content-grid-item">
              <p className="insurance-options-title">Your Insurance options</p>
              <div className="insurance-option-div" id="top-option">
                <p className="insurance-option-header">Comprehensive Every Day</p>
                <p className="insurance-option-description">Full cover including glass replacement and Roadside Assist</p>
              </div>
              <div className="insurance-option-div">
                <p className="insurance-option-header">Mechanical Breakdown</p>
                <p className="insurance-option-description">Full cover including glass replacement and Roadside Assist</p>
              </div>
              <div className="insurance-option-div">
                <p className="insurance-option-header">Third Parth Fire and Theft</p>
                <p className="insurance-option-description">Full cover including glass replacement and Roadside Assist</p>
              </div>
              <div className="insurance-option-div">
                <p className="insurance-option-header">Third Party Property Damage</p>
                <p className="insurance-option-description">Full cover including glass replacement and Roadside Assist</p>
              </div>
              <button className="insurance-options-button">Click to compare options</button>
            </div>
            <div className="main-content-grid-item" id="tina-image-div">
              <img src={Tina} id="tina-image" />
            </div>
            <div className="main-content-grid-item">
              <div className="quote-generator-box">
                <p className="quote-generator-title">Get your quote now</p>
                <p className="quote-generator-subtitle">Please enter the <b>details</b> of the <b>vehicle you want to insure</b></p>
                
                <div className="quote-generator-input">
                  <input id="full-width-input" placeholder='Licence Plate'></input>
                </div>
                <div className="quote-generator-input">
                  <input id="half-width-input" placeholder='Car Make'></input>
                  <input id="half-width-input" placeholder='Model'></input>
                </div>
                <div className="quote-generator-input">
                  <input id="half-width-input" placeholder='Body Style'></input>
                  <input id="half-width-input" placeholder='Engine Size'></input>
                </div>
                <div className="quote-generator-input">
                  <input id="full-width-input" placeholder='Address'></input>
                </div>
                
                <p className="quote-generator-subtitle"><b>Does the car have any of the following features?</b></p>
                <div className="quote-generator-input">
                  <input id="full-width-input" placeholder='An Immobiliser'></input>
                </div>
                <div className="quote-generator-input">
                  <input id="full-width-input" placeholder='An Immobiliser'></input>
                </div>
                
                <p className="quote-generator-subtitle">Please enter the <b>details</b> of the <b>driver</b> you want to insure</p>
                <div className="quote-generator-input">
                  <input id="half-width-input" placeholder='Date of Birth'></input>
                  <input id="half-width-input" placeholder='Gender'></input>
                </div>
                <button className="quote-generator-button">Submit</button>
              </div>
            </div>
          </div>
        </div>
        {/*SECTION 4 (footer)*/}
        <div className="grid-item" id="footer">
          <div className="footer-grid">
            <div className="footer-list-div">
              <ul>
                <li className="footer-list-header">CARS</li>
                <li className="footer-list-content">How to Buy</li>
                <li className="footer-list-content">Sell Your Car</li>
                <li className="footer-list-content">Finance & Insurance</li>
                <li className="footer-list-content">Auctions & Events</li>
                <li className="footer-list-content">Buyer & Seller Fees</li>
                <li className="footer-list-content">Vehicle Sale Price History Tool</li>
                <li className="footer-list-content">Shipping Costs</li>
              </ul>
            </div>
            <div className="footer-list-div">
              <ul>
                <li className="footer-list-header">FINANCE & INSURANCE</li>
                <li className="footer-list-content">Finance Homepage</li>
                <li className="footer-list-content">Car & Personal Finance</li>
                <li className="footer-list-content">Loan Calculator</li>
                <li className="footer-list-content">Car Insurance</li>
                <li className="footer-list-content">Mechanical Breakdown Insurance</li>
                <li className="footer-list-content">General Insurances</li>
                <li className="footer-list-content">Trucks Finance</li>
                <li className="footer-list-content">Financial Information</li>
              </ul>
            </div>
            <div className="footer-list-div">
              <ul>
                <li className="footer-list-header">SEARCH FOR</li>
                <li className="footer-list-content">Cars</li>
                <li className="footer-list-content">Trucks & Machinery</li>
                <li className="footer-list-content">Damaged & end of Life Cars</li>
                <li className="footer-list-content">Boats & Marine</li>
                <li className="footer-list-content">Motorcycles & Scooters</li>
                <li className="footer-list-content">General Goods</li>
                <li className="footer-list-content">Buses, Caravans & Motorhomes</li>
                <li className="footer-list-content">Turners Auction Schedule</li>
              </ul>
            </div>
            <div className="footer-list-div">
              <ul>
                <li className="footer-list-header">ABOUT US</li>
                <li className="footer-list-content">Overview</li>
                <li className="footer-list-content">Turners Careers</li>
                <li className="footer-list-content">Terms and Conditions</li>
                <li className="footer-list-content">Privacy Policy</li>
                <li className="footer-list-content">Turners Live</li>
                <li className="footer-list-content">The Good Oil Blog</li>
                <li className="footer-list-content">Email Alerts</li>
                <li className="footer-list-content">Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));