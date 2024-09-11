const User = require("../model/user.model");

class userServices{
 
    // Get User 
    async getUser(body){
        return await User.findOne(body)
    }
     
    // Create new User
    async AddUser(body){
        return await User.create(body)
    }
}

module.exports = userServices;