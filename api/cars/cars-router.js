const router = require('express').Router();
const Cars = require('./cars-model');

router.get('/', async (req, res) => {
    try {
        const data =  await Cars.getAll()
        res.json(data)
    } catch(err) {
        console.log(err)
    }

})

module.exports = router;