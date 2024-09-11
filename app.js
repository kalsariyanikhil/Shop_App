const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');
const morgan = require('morgan');

const mongoose = require('mongoose')
const mongodb_url = process.env.MONGODB_URL
const port = process.env.PORT
const userRoutes = require("./routes/user.routes");
const productRoutes = require("./routes/product.routes");
const cartRoutes = require("./routes/cart.routes");
const orderRoutes = require('./routes/order.routes');
const wishlistRoutes = require('./routes/wishlist.routes');
const reviewRoutes = require('./routes/review.routes');


app.use(morgan('dev'));
app.use(express.urlencoded({extended :true}));
app.use(express.json());
app.use("/public/images" , express.static(path.join(__dirname , 'public/images')));

app.get("/" , (req ,res) =>{
    res.write("welcome to furniture shopping");
    res.end();
})

app.use("/api/user" , userRoutes);
app.use("/api/product" , productRoutes);
app.use("/api/carts" , cartRoutes);
app.use("/api/order" , orderRoutes);
app.use("/api/wishlist" , wishlistRoutes);
app.use("/api/review" , reviewRoutes);

app.listen(port , async () =>{
    await mongoose
    .connect(mongodb_url)
        .then(() => console.log('mongodb connect succesFully'))
        .catch((error) => console.log('error'))
    console.log(`Server Start At http://localhost:${port} `);
})