import "./App.css";

//section components import
import Items from "./components/Items";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";

//no need to providers or any wrapper around root component of the app as its done in redux or context apis

function App() {
  return (
    <>
      <div
        style={{
          backgroundColor: "grey",
          width: "100%",
          margin: "10px",
          padding: "10px",
        }}
      >
        <h1>Zustand Implementation</h1>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{ backgroundColor: "grey", margin: "10px", padding: "10px" }}
        >
          <h1>Items Section</h1>
          <Items />
        </div>

        <div
          style={{ backgroundColor: "grey", margin: "10px", padding: "10px" }}
        >
          <h1>Wishlist Section</h1>
          <Wishlist />
        </div>
        <div
          style={{ backgroundColor: "grey", margin: "10px", padding: "10px" }}
        >
          <h1>Cart Section</h1>
          <Cart />
        </div>
      </div>
    </>
  );
}

export default App;
