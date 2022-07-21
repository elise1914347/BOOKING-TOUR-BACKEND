import Bookings from "../models/booking"

class BookingService{
    //Booking Tour
        static async BokingTour(req){
    const BookingB= await Bookings.create(req.body);
    return BookingB;
        };
        //get all
    static async getAllBooking(){
        const BookingB= await Bookings.find();
        return BookingB;
            }
              //updateTour
              static async updateBooking(req){
                await Bookings.findOneAndUpdate({_id:req.params.id},req.body);
                const BookingB=Bookings.findOne({_id: req.params.id});
                return BookingB;
                    }
    };
    export default BookingService;
