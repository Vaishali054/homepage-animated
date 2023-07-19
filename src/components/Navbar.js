import React from "react";
// import logo from '../images/'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container mobile">
        <a href="/" className="company-logo">
          <img
            className="logo"
            src="https://www.freeskout.com/img/freeskout.png"
          />
        </a>
        <div id="togglers">
        <svg xmlns="http://www.w3.org/2000/svg" height="  1em" viewBox="0 0 448 512" style={{fill:'white'}} className="routes hide">
          
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
          <a href="brands" className="route responsive">
            Brands
          </a>
          <a href="influencers" className="route responsive">
            Influencers
          </a>
          <a href="pricing" className="route responsive">
            Pricing
          </a>
          <a href="blogs" className="route responsive">
            Blogs
          </a>
          <a href="contact" className="route responsive">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
