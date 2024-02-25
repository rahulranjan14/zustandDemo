import { create } from "zustand";

export const wishlistState = create((set) => ({
  wishlist: [],
  addToWishlist: (item) =>
    set((state) => {
      const updatedWishlist = [...state.wishlist];
      updatedWishlist.push(item);
      return { wishlist: updatedWishlist };
    }),
  removeFromWishlist: (itemIndex) =>
    set((state) => {
      const updatedWishlist = [...state.wishlist];
      updatedWishlist.splice(itemIndex, 1);
      return { wishlist: updatedWishlist };
    }),
  clearWishlist: () => set({ wishlist: [] }),
}));
