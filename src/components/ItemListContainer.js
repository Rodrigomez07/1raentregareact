// src/components/ItemListContainer.js
import React from 'react';

function ItemListContainer({ greeting }) {
  return (
    <div className="container mt-4">
      <h2>{greeting}</h2>
      {/* Puedes agregar más contenido según sea necesario */}
    </div>
  );
}

export default ItemListContainer;
