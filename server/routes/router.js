const express = require("express");
const router = new express.Router();
const userdb = require("../models/userSchema");

// for user registration

router.post("/register", async (req, res) => {
  const { fname, email, password, cpassword } = req.body;
  if (!fname || !email || !password || !cpassword) {
    res.status(422).json({ error: "fill all the details" });
  }
  try {
    const preuser = await userdb.findone({ email: email });
    if (preuser) {
      res.status(422).json({ error: "This email already exists" });
    } else if (password !== cpassword) {
      res
        .status(422)
        .json({ error: "password and confirm password not match" });
    }
  } catch (error) {}
});

module.exports = router;
