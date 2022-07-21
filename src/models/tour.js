import mongoose from 'mongoose';

const TourSchema = new mongoose.Schema({
    Title:String,
    location:[String],
    description:String,
    duration:{
        startAt:Date,
        endAt:Date,
    },
    seats:Number,
    price:String,
    Rate:Number,
    picture:String,
    createdBy:{
        type:mongoose.Schema.ObjectId,
        ref:"user",
    },
    isActive:{
        type:Boolean,
        default:true,
    },
},{timestamps:true}
);
TourSchema.pre(/^find/,function(next){
    this.populate({
        path:"createdBy",
        select:"email phone names picture"
    });
    next();
})

const Tour = mongoose.model('Tour', TourSchema);
export default Tour;