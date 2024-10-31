const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require('cors');
const app = express();
const connectDB = require("./configs/db");

const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");

// Connect to the database
connectDB();

// Set up CORS to allow requests from your Netlify app
app.use(cors({
 // origin: 'https://loquacious-daffodil-0d3afa.netlify.app',  // production
  origin: 'http://localhost:3000',  // development
  methods: 'GET,POST,PUT,DELETE',  // Allow these methods
  credentials: true,  // If you need to allow credentials (like cookies, authorization headers)
}));

app.use(express.json());

// Define your routes
app.use("/api", productRoute);
app.use("/api", userRoute);
app.use("/api", adminRoute);

const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
