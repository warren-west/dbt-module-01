const router = require('express').Router();

router.get('/health', (req, res) => {
    res.send({ message: "ok" });
});

module.exports = router;
