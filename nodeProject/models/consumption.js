import mongoose from "mongoose";

const Schema = mongoose.Schema;

const consumptionSchema = new Schema(
  {
    country: {
      type: String,
      required: true
    },
    beer_servings: {
      type: Number,
    },
    spirit_servings: {
      type: Number
    },
    wine_servings: {
      type: Number
    },
    total_litres_of_pure_alcohol: {
      type: Number
    }
  }
)

const Consumption = mongoose.model("Consumption", consumptionSchema, "Consumption");

export default Consumption;