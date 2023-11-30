// src/components/NavBar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CartWidget from './CartWidget';
import './NavBar.css'; // Agrega el archivo de estilos

function NavBar() {
  const categories = ['Remeras', 'Buzos', 'Camperas', 'Stickers'];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          Free Soul's
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            {categories.map((category, index) => (
              <li key={index} className="nav-item">
                <a className="nav-link" href={`/${category.toLowerCase()}`}>
                  {category}
                </a>
              </li>
            ))}
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
