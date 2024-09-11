const express = require('express');
const {registerUser, registerPage, loginPage , loginUser , updateUser, userProfile, deleteUser, getAllUSer, changePassword} = require('../controller/user.controller');
const {verifyToken} = require('../helpers/tokenVerify')

const userRoutes = express.Router();

userRoutes.get("/" , registerPage);
userRoutes.post("/register" , registerUser);

userRoutes.get("/" , loginPage);
userRoutes.post("/login" , loginUser);

userRoutes.get("/profile" , verifyToken ,  userProfile);
userRoutes.get("/alluser" , getAllUSer)

userRoutes.put("/update" , verifyToken ,  updateUser );

userRoutes.post("/change-password" , changePassword)

userRoutes.delete("/delete" , verifyToken , deleteUser);


module.exports = userRoutes;