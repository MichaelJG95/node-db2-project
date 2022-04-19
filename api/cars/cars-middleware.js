const Cars = require('./cars-model');
const vinValidator = require('vin-validator');

const checkCarId = async (req, res, next) => {
  const data = await Cars.getAll()
  const car = data.find(car => car.id == req.params.id)
  if (car) {
    req.existingCar = car;
    next();
  } else {
    res.status(404).json({ message: `car with id ${req.params.id} is not found` });
  }
}

const checkCarPayload = (req, res, next) => {
 
  if (req.body.vin === undefined) {
    res.status(400).json({ message: "vin is missing" });
    return;
  } else if (req.body.make === undefined) {
    res.status(400).json({ message: "make is missing" });
    return;
  } else if (req.body.model === undefined) {
    res.status(400).json({ message: "model is missing" });
    return;
  } else if (req.body.mileage === undefined) {
    res.status(400).json({ message: "mileage is missing" });
    return;
  }
  next()
}

const checkVinNumberValid = (req, res, next) => {
  const isValidVin = vinValidator.validate(req.body.vin);
  if (isValidVin) {
    next();
  } else {
    res.status(400).json({ message: `vin ${req.body.vin} is invalid` })
    return;
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  const data = await Cars.getAll()
  const car = data.find(car => car.vin == req.body.vin)
  if (car) {
    res.status(400).json({ message: `vin ${req.body.vin} already exists` });
    return;
  } else {
    next();
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}