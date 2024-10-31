import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Function to handle removal of item from cart
  const handleRemove = (id) => {
    console.log("Attempting to remove item with id:", id); // Debugging line
    dispatch(removeFromCart(id));
  };

  // Calculate total bill
  const totalBill = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <Container sx={{ mt: 10 }}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography variant="h6">Your cart is empty.</Typography>
      ) : (
        <Box>
          <Grid container spacing={4}>
            {cartItems.map((item) => (
              <Grid item key={item._id} xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.image}
                    alt={item.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ${item.price} x {item.quantity}
                    </Typography>
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{ mt: 2 }}
                      onClick={() => handleRemove(item._id)}
                    >
                      Remove from Cart
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Display total bill */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5">
              Total Bill: ${totalBill.toFixed(2)}
            </Typography>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default CartPage;
