const router = require('express').Router();
const Cars = require('./cars-model');

const { checkCarId } = require('./cars-middleware')

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

module.exports = router;