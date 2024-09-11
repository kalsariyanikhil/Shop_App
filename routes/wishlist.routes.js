const express = require('express');
const {addFavourite , getAllFavourite , getSpecificFavourite} = require('../controller/wishlist.controller');
const {verifyToken} = require("../helpers/tokenVerify");

const wishlistRoutes = express.Router()

wishlistRoutes.post("/fav" ,verifyToken , addFavourite);

wishlistRoutes.get("/allfav" ,verifyToken, getAllFavourite);

wishlistRoutes.get("/spefav" ,verifyToken , getSpecificFavourite)

module.exports = wishlistRoutes;