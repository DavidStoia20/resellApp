import "./App.css";
import Product from "./components/Product.jsx";
import Header from "./components/Header.jsx";
import Add from "./components/Add.jsx";
import MyPagination from "./components/MyPagination.jsx";
import { useState } from "react";

function App() {
  const [result, setResults] = useState([]);
  console.log(result);
  return (
    <>
      <Header setResults={setResults} />
      <Product />
      <Add />
      <MyPagination data={result} />
    </>
  );
}

export default App;
