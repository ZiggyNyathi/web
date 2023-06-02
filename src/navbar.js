import React from 'react';
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
function Navbar() {
  return (
    <nav>
        <b href ="/">Shophub</b>
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
          <FontAwesomeIcon icon={faEnvelope} />

    </nav>
  );
}

export default Navbar;
