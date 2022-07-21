import TourModel from "../models/tour";

class TourServiceS{
//registering tour
    static async registerTour(req){
const Tour= await TourModel.create(req.body);
return Tour;
    }
    //get all
    static async getAllTours(){
        const Tour= await TourModel.find();
        return Tour;
            }
            //updateTour
            static async updateTour(req){
                await TourModel.findOneAndUpdate({_id:req.params.id},req.body);
                const Tour=TourModel.findOne({_id: req.params.id});
                return Tour;
                    }
                    //static getone
                    static async getOneTour(req){
                       const Tour= await TourModel.findById({_id:req.params.id},req.body);
                       return Tour;
                    }
}


export default TourServiceS;