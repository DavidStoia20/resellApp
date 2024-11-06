import React, { useState, useEffect } from "react";

export default function Search(props) {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((response) => response.json())
      .then((data) => {
        props.setResults(data.response);
        setData(data.response);
      });
  }, []);

  const handleChange = (value) => {
    setInput(value);

    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    props.setResults(filteredData);
  };
  return (
    <div>
      <input
        id="search-bar"
        type="search"
        placeholder="Search.."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}
