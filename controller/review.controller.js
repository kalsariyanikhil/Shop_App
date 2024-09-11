const Review =  require('../model/review.model');


exports.addReview = async (req, res) => {
    try {
        // let user = req.user;
        // console.log(user);
        let review = await Review.findOne({user:req.user._id,product:req.body.productId,isDelete: false});
        
        if(review) {
            return res.status(400).json({ Message: 'Review alredy exist.....' });
        }
        review = await Review.create({ ...req.body, user: req.user._id });
        res.status(201).json({review, Message: 'Review Added SuccessFully...' })
    } catch (error) {
        console.log(error);
        res.status(500).json({ Message: 'Internal server Error' });
    }
};

