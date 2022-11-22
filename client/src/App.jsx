import React, { useState } from "react";
import "./App.css";
import Header from "./componets/Header/Header";
import Footer from "./componets/Footer/Footer";
import Product from "./componets/products/Product";
import Filter from "./componets/Filter/Filter";
import data from "./data/data.json";
function App() {
  const [products, setProducts] = useState(data);
  return (
    <>
      <div className="App">
        <Header />
        <main className="App-main">
          <Product products={products} />
          <Filter />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
