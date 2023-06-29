import Consumption from "../models/consumption.js"

const getConsumptions = (req, res, next) => {
  Consumption.find()
  .then(consumptions => {
    res
      .status(200)
      .json({
        message: "Posts retrieved successfully", response: consumptions
      })
  }).catch(error => {
    if(!error.statusCode) {
      error.statusCode = 500;
    }
    next(error)
  })
}

const createConsumption = (req, res, next) => {
  const consumption = new Consumption({
    country: "MonglooLand",
    beer_servings: 99,
    spirit_servings: 99,
    wine_servings: 99,
    total_litres_of_pure_alcohol: 99
  })
  consumption.save()
    .then((response) => {
      res
        .status(200)
        .json({
          message: "Consumption created successfully", response: response
        })
  }).catch(error => {
    if(!error.statusCode) {
      error.statusCode = 500;
    }
    next(error)
  })
}

const retrieveConsumption = (req, res, next) => {
  Consumption.find({ _id: req.params.id })
  .then(consumption => {
    res
      .status(200)
      .json({
        message: "Posts retrieved successfully", response: consumption
      })
  }).catch(error => {
    if(!error.statusCode) {
      error.statusCode = 500;
    }
    next(error)
  })
}

const updateConsumption = (req, res, next) => {
  const filter = { _id: req.params.id };
  const update = { country: req.params.country };
  Consumption.findOneAndUpdate(filter, update)
    .then((response) => {
      res
        .status(200)
        .json({
          message: "Consumption update successfully", response: response
        })
  }).catch(error => {
    if(!error.statusCode) {
      error.statusCode = 500;
    }
    next(error)
  })
}

const deleteConsumption = (req, res, next) => {

}

const getHelloWorld = (req, res, next) => {
  console.log("Hello world")
}

export const consumption_controller = {
  getConsumptions: getConsumptions,
  createConsumption: createConsumption,
  retrieveConsumption: retrieveConsumption,
  updateConsumption: updateConsumption,
  deleteConsumption: deleteConsumption,
  getHelloWorld: getHelloWorld,
}

export default consumption_controller