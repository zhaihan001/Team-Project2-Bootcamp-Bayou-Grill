const router = require("express").Router();

const submitorder = require("./submitorder");
const userRoutes = require("./userRoutes");
const exportreceipt = require("./exportreceipt");

router.use("/submitorder", submitorder);
router.use("/user", userRoutes);
router.use("/exportreceipt", exportreceipt);

module.exports = router;
