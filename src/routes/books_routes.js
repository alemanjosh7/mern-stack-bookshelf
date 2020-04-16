const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(res.json({
        status: 'API Works!'
    }));
})

module.exports = router;