const { createBusiness } = require("./business.controller");

const router = require("express").Router();

router.post('/', createBusiness);

module.exports = router;