import React from "react";
import { wishlistState } from "../zustandState/wishlist";

export default function Wishlist() {
  const { wishlist, addToWishlist, removeFromWishlist } = wishlistState();

  const handleRemoveFromWishlist = (itemIndex) => {
    removeFromWishlist(itemIndex);
  };

  return (
    <div>
      <h2>Your Wishlist</h2>
      <div>
        <h3>Wishlisted items : {wishlist.length}</h3>
      </div>
      <div>
        <h3>Items in wishlist :</h3>
      </div>
      <div>
        {wishlist.length == 0 ? (
          <h4>No items here</h4>
        ) : (
          <div>
            {wishlist.map((item, index) => {
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
                    onClick={() => handleRemoveFromWishlist(index)}
                  >
                    remove from wishlist
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
