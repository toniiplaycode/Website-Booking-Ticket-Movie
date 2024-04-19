const FilmService = require("../services/FilmService");

const getDetailFilm = async (req, res) => {
  try {
    const FilmId = req.params.id;
    if (!FilmId) {
      return res.status(200).json({
        status: "ERR",
        messge: "The FilmId is null",
      });
    }
    const response = await FilmService.getDetailFilm(FilmId);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      messge: e,
    });
  }
};

const getAllFilm = async (req, res) => {
  try {
    const response = await FilmService.getAllFilm();
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      messge: e,
    });
  }
};

const addNewFilm = async (req, res) => {
  try {
    await FilmService.addNewFilm(req.body);
    return res.status(200).json("add New Film successful");
  } catch (e) {
    return res.status(404).json({
      messge: e,
    });
  }
};

const updateFilm = async (req, res) => {
  try {
    await FilmService.updateFilm(req);
    return res.status(200).json("Update a successful Film");
  } catch (e) {
    return res.status(404).json({
      messge: e,
    });
  }
};

let deleteFilm = async (req, res) => {
  try {
    await FilmService.deleteFilm(req.body.id);
    return res.status(200).json("Delete a successful user");
  } catch (e) {
    return res.status(404).json({
      messge: e,
    });
  }
};

module.exports = {
  getDetailFilm,
  getAllFilm,
  addNewFilm,
  updateFilm,
  deleteFilm,
};
