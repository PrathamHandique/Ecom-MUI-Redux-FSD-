const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const connectDB = require("./configs/db");

const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");

connectDB();
app.use(express.json());
app.use("/api", productRoute);
app.use("/api",userRoute);
app.use("/api", adminRoute);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const cors = require('cors');


// Allow requests from http://localhost:3000 (your React app)
// app.use(cors({
//   origin: 'http://localhost:3000'
// }));
app.use(cors());