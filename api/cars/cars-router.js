const router = require('express').Router();
const Cars = require('./cars-model');

const { checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique } = require('./cars-middleware')

router.get('/', async (req, res) => {
    try {
        const data =  await Cars.getAll()
        res.json(data)
    } catch(err) {
        console.log(err)
    }
})

router.get('/:id', checkCarId, (req, res) => {
    res.json(req.existingCar);
})

router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, async (req, res) => {
    try {
        const data =  await Cars.create(req.body)
        res.status(201).json(data)
    } catch(err) {
        console.log(err)
    }
})

module.exports = router;