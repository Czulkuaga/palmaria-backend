const {Router} = require('express');
const ScrapingController = require('../controller/ScrapingController');
const router = Router();

//Public Route
router.get('/', (req, res) => {
    res.json({msg: 'Backend Works!!'})
})

router.post('/api/cbml/get', ScrapingController.obtainCbml)

module.exports = router;