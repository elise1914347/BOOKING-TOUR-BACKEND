import mongoose from "mongoose";

const TourSchema = new mongoose.Schema({
    bookedBy: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
      },
  
      // tourId: {
      //   type: mongoose.Schema.ObjectId,
      //   ref: "tours",
      // },
  
      paidAmount: String,
      status: {
          type: String,
          enum: ["pending", "accept","cancel"],
          default:"pending"
        },
      isActive: {
        type: Boolean,
        default: true,
      },
    },
    { timestamps: true }
  );
  
  TourSchema.pre(/^find/, function (next) {
    this.populate({
      path: "bookedBy",
      select: "email phone names picture",
    });
    next();
  });
  
  // TourSchema.pre(/^find/, function (next) {
  //   this.populate({
  //     path: "tourId",
  //     select: "title duration price seat",
  //   });
  //   next();
  // });
  
  const bookingModel = mongoose.model("booking",TourSchema );
  
  export default bookingModel