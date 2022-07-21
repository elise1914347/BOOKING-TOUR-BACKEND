import  Bokkingservice from "../services/bookingService";
import Response from "../utils/response";

class BookingController {
    //Booking 
    static async BokingTour(req, res) {
      const BookingB = await Bokkingservice.BokingTour(req);
      if (!BookingB) {
        return Response.errorMessage(res, "Failed to Bookings", 400);
      }
      return Response.successMessage(
        res,
        "booking sucessfully registered",
        BookingB,
        200
      );
    };
// get all
static async getAllBooking(req, res) {
  const BookingB = await Bokkingservice.getAllBooking(req);
  if (!BookingB) {
    return Response.errorMessage(res, "not Booking Found", 400);
  }
  return Response.successMessage(
    res,
    "Booking successfully to retrieved",
    BookingB,
    200
  );
}

 //update user
 static async updateBooking(req, res) {
  const BookingB = await  Bokkingservice.updateBooking(req);
  if (!BookingB) {
    return Response.errorMessage(res,"Booking not found",400);
  }
  return Response.successMessage(
    res,
    "Booking successfully to retrieved",
    BookingB,
    200
  );
}
    
}
 export default BookingController;
