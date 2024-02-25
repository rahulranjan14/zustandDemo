import React from "react";
import { cartState } from "../zustandState/cart";
import { wishlistState } from "../zustandState/wishlist";

export default function Items() {
  const allItems = ["Cap", "Shirt", "Trouser", "Shoe"];

  // Destructuring cart state and its related functions from zustand's cart store
  const { cart, addToCart, removeFromCart } = cartState();

  // Destructuring wishlist state and its related functions from zustand
  const { wishlist, addToWishlist, removeFromWishlist } = wishlistState();

  const handleAddToCart = (itemToadd) => {
    addToCart(itemToadd);
  };

  const handleAddToWishlist = (itemToadd) => {
    if (wishlist.includes(itemToadd)) {
      window.alert("item already in wishlist");
    } else {
      addToWishlist(itemToadd);
    }
  };

  return (
    <div>
      <h2>All Items</h2>

      {allItems.map((item, index) => {
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
              style={{ backgroundColor: "blue" }}
              onClick={() => handleAddToWishlist(item)}
            >
              add to wishlist
            </button>
            <button
              style={{ backgroundColor: "red" }}
              onClick={() => handleAddToCart(item)}
            >
              add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
}
