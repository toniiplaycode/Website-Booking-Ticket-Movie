const path = require("path");
const multer = require("multer");

const storageFilm = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../client/public/images/films");
  },
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const uploadFilm = multer({
  storage: storageFilm,
});

module.exports = {
  uploadFilm,
};
