// ProductList.js
import React, { useState } from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const products = [
    { id: 1, name: 'God of War Ragnarök', price:4999, image: 'https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-hub-thumbnail-ragnarok-en-09sept21?$1600px$' },
    { id: 2, name: 'God of War', price: 1499, image: 'https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-hub-thumbnail-2018-en-29jul21?$1600px$' },
    { id: 3, name: 'God of War: Ghost of Sparta', price: 499, image: 'https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-hub-thumbnail-ghost-of-sparta-en-29jul21?$1600px$' },
  ];

  const [cartItems, setCartItems] = useState({});
  const [totalItemsInCart, setTotalItemsInCart] = useState(0);

  const handleQuantityChange = (productId, newQuantity) => {
    const newCartItems = { ...cartItems, [productId]: newQuantity };
    const newTotalItemsInCart = Object.values(newCartItems).reduce((total, quantity) => total + quantity, 0);
    setCartItems(newCartItems);
    setTotalItemsInCart(newTotalItemsInCart);
  };

  return (
    <div>
      <div className="cart-button">
        <button>Cart ({totalItemsInCart})</button>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onQuantityChange={handleQuantityChange} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
