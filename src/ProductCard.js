import React, { useState } from 'react';

const ProductCard = ({ product, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);
  const [errorMessage, setErrorMessage] = useState('');

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 0 && newQuantity <= 5) {
      setQuantity(newQuantity);
      setErrorMessage('');
      onQuantityChange(product.id, newQuantity);
    } else {
      setErrorMessage('Quantity cannot exceed 5');
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      handleQuantityChange(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    if (quantity < 5) {
      handleQuantityChange(quantity + 1);
    } else {
      setErrorMessage('Quantity cannot exceed 5');
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>Price: ₹ {product.price}</p>
      <div className="quantity-control">
        <button onClick={decrementQuantity}>-</button>
        <input type="number" value={quantity} min={1} max={5} readOnly />
        <button onClick={incrementQuantity}>+</button>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default ProductCard;
