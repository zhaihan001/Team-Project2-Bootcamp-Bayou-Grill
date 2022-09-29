const router = require("express").Router();
const submitorder = require("./submitorder");
const userRoutes = require("./userRoutes");

router.use("/submitorder", submitorder);
router.use("/user", userRoutes);

module.exports = router;
