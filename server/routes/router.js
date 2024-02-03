const express = require("express");
const router = new express.Router();

// for user registration

router.post("/register", async (req, res) => {
  const { fname, email, password, cpassword } = req.body;
});

module.exports = router;
