// const db=require('../models/reviewModel')
// const Review=db.reviews
// //function
// //add reviews
// const addReviews=async(req,res)=>{
//     let data={
//         rating:req.body.rating,
//         description:req.body. description
//     }
//     const review=await Review.create(data)
//     res.status(200).send(review)
// }
// //get all reviews
// const getAllReviews=async (req,res)=>{
//     const reviews=await Review.findAll({})
//     res.status(200).send(reviews)
// }
// module.exports={
//     getAllReviews,
//     addReviews
// }