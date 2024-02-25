import React from "react";

import { cartState } from "../zustandState/cart";

export default function Cart() {
  // Destructuring cart state and its related functions from zustand's cart store
  const { cart, removeFromCart, clearCart } = cartState();

  const handleRemoveFromCart = (itemIndex) => {
    removeFromCart(itemIndex);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <div>
        <h3>Cart items : {cart.length}</h3>
      </div>
      <div>
        <h3>Items in cart :</h3>
      </div>
      <div>
        {cart.length == 0 ? (
          <h4>Cart is empty</h4>
        ) : (
          <div>
            {cart.map((item, index) => {
              return (
                <div
                  style={{
                    margin: "10px",
                    backgroundColor: "teal",
                    border: "1px solid white",
                  }}
                >
                  <h3>{item}</h3>
                  <button
                    style={{ backgroundColor: "red" }}
                    onClick={() => handleRemoveFromCart(index)}
                  >
                    remove from cart
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div>
        {cart.length !== 0 && (
          <div>
            <button
              style={{ backgroundColor: "red" }}
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
