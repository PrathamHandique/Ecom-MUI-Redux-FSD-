import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import axios from "axios";
const baseurl="https://back-uisx.onrender.com";
const AdminProductPage = () => {
  const [product, setProduct] = useState({ name: "", price: "", imageUrl: "" });
  const [submitMessage, setSubmitMessage] = useState("");
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseurl}/api/create-products`, {
        name: product.name,
        price: product.price,
        image: product.imageUrl,
      });
      if (response.status === 201) {
        setSubmitMessage("Product successfully posted!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container sx={{ mt: 4 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Product Name"
          name="name"
          value={product.name}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Price"
          name="price"
          type="number"
          value={product.price}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Image URL"
          name="imageUrl"
          value={product.imageUrl}
          onChange={handleChange}
          margin="normal"
          required
        />
        <Button variant="contained" type="submit" sx={{ mt: 2 }} fullWidth>
          Post Product
        </Button>
      </form>
      {submitMessage && (
        <Typography variant="body1" color="primary" sx={{ mt: 2 }}>
          {submitMessage}
        </Typography>
      )}
    </Container>
  );
};
export default AdminProductPage;
