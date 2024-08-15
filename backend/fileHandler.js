const express = require("express");
const router = express.Router();
const path = require("path");
const expressFileUpload = require("express-fileupload");
// A simpler, lightweight middleware for handling file uploads.Automatically parses the file and makes it available in req.files.
router.use(expressFileUpload());
const assetsFolder = path.join(__dirname, "assets");
router.post("/upload", (req, res) => {
  const { avatar } = req.files;
  try {
    setTimeout(() => {
      avatar.mv(path.join(assetsFolder, avatar.name));
      res.status(200).json({ message: "ok" });
    }, 2000);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
