import React, { useEffect } from "react";
import { Grid, Container} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProductCart from "../components/productCart";
import { setProducts } from "../redux/productSlice";
const baseurl="https://back-uisx.onrender.com";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { products} = useSelector((state) => state.products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${baseurl}/api/get-products`);
        console.log(response.data);
        dispatch(setProducts(response.data));
      } catch (error) {
        console.log(error);
      } 
    };
    fetchProducts();
  }, [dispatch]);


  return (
    <Container sx={{ mt: 10 }}>
      <Grid container spacing={10}>
        {products &&
          products.map((product) => (
            <Grid item key={product._id} xs={12} sm={6} md={4}>
              <ProductCart product={product} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default ProductPage;
