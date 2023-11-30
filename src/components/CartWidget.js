// src/components/CartWidget.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart } from 'react-icons/fa'; // Modifica esta línea

function CartWidget() {
  const itemCount = 3; // Número hardcodeado (puedes cambiarlo según necesites)

  return (
    <div className="cart-widget">
      <FaShoppingCart className="cart-icon" /> {/* Modifica esta línea */}
      <span className="badge badge-danger">{itemCount}</span>
    </div>
  );
}

export default CartWidget;
