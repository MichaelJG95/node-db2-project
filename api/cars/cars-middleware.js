const Cars = require('./cars-model');

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
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}