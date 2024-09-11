const express = require('express')
const { default: mongoose } = require('mongoose')

const userSchema = mongoose.Schema({
    firstName : {
        type : String
    },
    localStorageastName : {
        type : String
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String
    },
    age : {
        type : Number
    },
    mobileNo : {
        type : String
    },
    profileImage : {
        type : String
    },
    isDelete : {
        type : Boolean,
        default : false
    }
})

module.exports = mongoose.model('users' , userSchema)
