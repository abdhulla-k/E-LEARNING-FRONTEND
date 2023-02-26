const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
require("dotenv").config();
express()
  .use(express.static(path.join(__dirname, "dist")))
  .get("*", (req, res) => {
    res.sendFile("index.html", { root: "dist" });
  })
  .listen(PORT, () => {});
