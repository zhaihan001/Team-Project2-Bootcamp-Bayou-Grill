const router = require("express").Router();
const { Purchase, Detail } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newOrder = await Purchase.create({
      itemCount: req.body.itemCount,
      totalCost: req.body.totalCost,
      customer_id: req.session.user_id,
    });
    if (!newOrder) {
      res
        .status(404)
        .json({ message: "You can not place an order with no food" });
      return;
    }
    const orderData = await Purchase.findOne({
      attributes: ["id"],
      where: { customer_id: req.session.user_id },
      order: [["date_created", "DESC"]],
    });
    console.log(req.body.foodId);

    req.body.foodId.forEach(async (item) => {
      const newOrderDetail = await Detail.create({
        food_id: item,
        order_id: orderData.id,
      });
      console.log(newOrderDetail);
    });
    res.status(200).json(newOrder);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
