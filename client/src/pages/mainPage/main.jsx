import React, { useState, useEffect } from "react";
import Product from "../../componets/products/Product";
import Filter from "../../componets/Filter/Filter";
import data from "../../data/data.json";
import axioc from "axios";
const mainPage = ({ handelAddToCart }) => {
  const [products, setProducts] = useState(data);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");
  const [NotFound, setNotFound] = useState(false);
  const [FilterProducts, setFilterProducts] = useState([]);
  const [FilterProductsSize, setFilterProductsSize] = useState(0);
  //  sort by size
  const handelSizeSelect = (e) => {
    setNotFound(false);
    if (e.target.value === "All") {
      setSize(e.target.value);
      setFilterProducts([]);
      setProducts(data);
    } else {
      setSize(e.target.value);
      const productClone = [...products];
      const newProduct = productClone.filter(
        (product) => product.size.indexOf(e.target.value) != -1
      );
      setFilterProducts(newProduct);
      setFilterProductsSize(newProduct.length);
      setNotFound(false);
      if (newProduct.length === 0) {
        setNotFound(true);
      }
    }
  };

  // sort by price
  const handelSortSelect = (e) => {
    console.log(e.target.value);
    setSort(e.target.value);
    if (e.target.value === "") {
    } else {
      let productClone =
        FilterProducts.length > 0 ? [...FilterProducts] : [...products];

      if (e.target.value === "Lowest") {
        productClone.sort((a, b) => a.price - b.price);
      } else if (e.target.value === "Highest") {
        productClone.sort((a, b) => b.price - a.price);
      } else if (e.target.value === "Latest") {
        productClone.sort((a, b) => a.id < b.id);
      }
      setFilterProducts(productClone);
      setFilterProductsSize(productClone.length);
    }
  };

  // useEffect(() => {
  //   axioc.get("/api/v1/products").then((res) => {
  //     setProducts(res.data);
  //     console.log(res.data, "res.data");
  //   });
  // }, []);

  return (
    <>
      <div className="App-main">
        <main className="App-main">
          <Product
            products={products}
            FilterProducts={FilterProducts}
            NotFound={NotFound}
            size={size}
            handelAddToCart={handelAddToCart}
          />
          <Filter
            handelSizeSelect={handelSizeSelect}
            size={size}
            sort={sort}
            handelSortSelect={handelSortSelect}
            FilterProductsSize={FilterProductsSize}
            productSize={products.length}
          />
          {/* <CartComponent /> */}
        </main>
      </div>
    </>
  );
};

export default mainPage;
