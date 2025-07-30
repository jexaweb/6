import axios from "axios";
import { useEffect, useState } from "react";
import Productlist from "../components/Productlist";
import { data } from "react-router-dom";
// import { useFetch } from "../hooks/useFetch";

function Home() {
  const {
    data: products,
    isPending,
    error,
  } = useFetch("https://dummyjson.com/products");
  useEffect(() => {
    axios("")
      .then(({ data }) => setProducts(data.products))
      .catch((error) => console.log(error.message));
  }, []);
  return <section>{products && <Productlist products={products} />}</section>;
}

export default Home;
