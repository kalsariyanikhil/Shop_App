const express = require('express');
const {addReview} = require('../controller/review.controller')
const {verifyToken} = require('../helpers/tokenVerify')
const reviewRoutes = express.Router();

reviewRoutes.post("/addreview" , addReview);

module.exports = reviewRoutes;