const Wishlist = require("../model/wishlist.model")


exports.addFavourite=async(req,res)=>
{
    try {
        let wishlist = await Wishlist.findOne({productId:req.body.productId,user:req.user._id});
        // console.log(wishlist); 
        if(wishlist){
           const wishlist=  await Wishlist.findByIdAndDelete(Wishlist._id)
            return res.json({message:"Unfavourite successfully ", isFavourite:0})
        }
        else{
        let wishlist = await Wishlist.create({...req.body,user : req.user._id});
            res.json({message:"add favourite success...",isFavourite:1});
        }
       
    } catch (error) {
        console.log(error);
        res.status(501).json({message : "Internsl Server Error"})
        
    }
};

exports.getAllFavourite = async(req,res)=>
{
    try {
        let wishlist = await Wishlist.find({isDelete:false});
        res.json(wishlist);
    } catch (error) {
        console.log(error);
        res.json(501).json({message : "Internal Server Error"});
          
    }
};

exports.getSpecificFavourite = async(req,res)=>
{
        try {
            let wishlist = await Wishlist.find({user:req.user._id,isDelete:false});
            console.log(wishlist);
            if(!wishlist){
                return res.json({message:"favourite item is already exist..."})
            }
            res.json(wishlist)
        } catch (error) {
            console.log(error);
            res.status(501).json({message : "Internsl Server Error"})
        }
};


