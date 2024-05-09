const path = require("path");
const multer = require("multer");

const storageFilm = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../client/upload/images/films");
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

const storageUser = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../client/upload/images/users");
  },
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const uploadUser = multer({
  storage: storageUser,
});

module.exports = {
  uploadFilm,
  uploadUser,
};
