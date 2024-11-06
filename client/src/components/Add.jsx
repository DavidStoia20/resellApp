import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      fetch("http://localhost:5000/addProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));

      setFormData({
        name: "",
        price: "",
        description: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <TextField
        className="text-input"
        type="text"
        name="name"
        label="Product Name"
        variant="filled"
        size="small"
        value={formData.name}
        onChange={handleChange}
      />
      <TextField
        className="text-input"
        type="number"
        name="price"
        label="Price"
        variant="filled"
        size="small"
        value={formData.price}
        onChange={handleChange}
      />
      <TextField
        className="text-input"
        name="description"
        label="Description"
        variant="filled"
        size="small"
        value={formData.description}
        onChange={handleChange}
      />
      <Button className="submit-button " type="submit" variant="contained">
        Add Product
      </Button>
    </form>
  );
}
