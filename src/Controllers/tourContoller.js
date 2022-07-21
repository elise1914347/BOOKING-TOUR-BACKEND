import TourServiceS from "../services/tourService";
import Response from "../utils/response";

class TourController {
  //register tour
  static async registerTour(req, res) {
    const Tour = await TourServiceS.registerTour(req);
    if (!Tour) {
      return Response.errorMessage(res, "Failed to register tour", 400);
    }
    return Response.successMessage(
      res,
      "Tour sucessfully registered",
      Tour,
      200
    );
  }

  //get all Tour
  static async getAllTours(req, res) {
    const Tour = await TourServiceS.getAllTours(req);
    if (!Tour) {
      return Response.errorMessage(res, "not Tours Found", 400);
    }
    return Response.successMessage(
      res,
      "Tour successfully to retrieved",
      Tour,
      200
    );
  }

  //update user
  static async updateTour(req, res) {
    const Tour = await TourServiceS.updateTour(req);
    if (!Tour) {
      return Response.errorMessage(res,"Tour not found",400);
    }
    return Response.successMessage(
      res,
      "Tour successfully to retrieved",
      Tour,
      200
    );
  }
  //getone by Id
  static async getOneTour(req,res){
    const Tour = await TourServiceS.getOneTour(req);
    if(!Tour){
      return Response.errorMessage(res,"Tour not found",400);
    }
    return Response.successMessage(
      res,
      "Tour successfully to retrieved",
      Tour,
      200
    );
  }
}
export default TourController;
