const router = require("express").Router();
const { Customer, Category, Food, Purchase, Detail } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    // Get all menuInfo
    const menuData = await Food.findAll({
      include: [
        {
          model: Category,
          attributes: ["name"],
        },
      ],
    });
    // Serialize data so the template can read it
    const menuItems = menuData.map((menuItems) =>
      menuItems.get({ plain: true })
    );
    // Pass serialized data and session flag into template
    res.render("homepage", {
      menuItems,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/neworder", withAuth, async (req, res) => {
  try {
    // fetch food table and include category name
    const menuData = await Food.findAll({
      include: [
        {
          model: Category,
          attributes: ["name"],
        },
      ],
    });
    const menuItems = menuData.map((menuItems) =>
      menuItems.get({ plain: true })
    );

    res.render("neworder", {
      menuItems,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/orderhistory", withAuth, async (req, res) => {
  try {
    
    const orderData = await Purchase.findAll({
      where: { customer_id: req.session.user_id },
      include: [
        {
          model: Customer,
          attributes: ["name", "email", "phone"],
        },
      ],
    });
    
    const orderList = orderData.map((item) => item.get({ plain: true }));
    res.render("orderhistory", {
      orderList,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/orderhistory/detail/:id", async (req, res) => {
  try {
    const detailData = await Detail.findAll({
      include: [
        { model: Food, attributes: ["name", "price"] },
        { model: Purchase, attributes: ["totalCost", "date_created"] },
      ],
      where: { order_id: req.params.id },
    });
    const orderDetail = detailData.map((item) => item.get({ plain: true }));

    const orderData = await Purchase.findAll({
      where: { id: req.params.id },
    });
    
    const orderPurchaseData = orderData.map((item) =>
      item.get({ plain: true })
    );

    res.render("orderdetail", {
      orderDetail,
      orderPurchaseData,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }

  res.render("login");
});

module.exports = router;
