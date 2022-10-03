const validator = require("../utils/validate");
const signup = async (req, res, next) => {
  const validationRule = {
    name: "required|string",
    email: "required|string|email",
    phone: "string",
    password: "required|string|min:8",
  };

  await validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: "Incorrect Input Format!",
        data: err,
      });
    } else {
      next();
    }
  }).catch((err) => console.log(err));
};
module.exports = signup;
