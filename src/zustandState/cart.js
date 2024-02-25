import { create } from "zustand";

// Creating and exporting the cart state
export const cartState = create((set) => ({
  // Initial cart state with an empty array
  cart: [],
  addToCart: (item) =>
    set((state) => {
      const updatedCart = [...state.cart];
      updatedCart.push(item);
      return { cart: updatedCart };
    }),
  removeFromCart: (itemIndex) =>
    set((state) => {
      const updatedCart = [...state.cart];
      updatedCart.splice(itemIndex, 1);
      return { cart: updatedCart };
    }),
  clearCart: () => {
    set(() => {
      return { cart: [] };
    });
  },
}));

//functions with logic for various operations with the cartstate
