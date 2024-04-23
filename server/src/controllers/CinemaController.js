const Service = require("../services/CinemaService");

const getDetailCinema = async (req, res) => {
  try {
    const Id = req.query.id;
    if (!Id) {
      return res.status(200).json({
        status: "ERR",
        messge: "The Cinema is null",
      });
    }
    const response = await Service.getDetailCinema(Id);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      messge: e,
    });
  }
};

const getAllCinema = async (req, res) => {
  try {
    const response = await Service.getAllCinema();
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      messge: e,
    });
  }
};

const addNewCinema = async (req, res) => {
  try {
    await Service.addNewCinema(req.body);
    return res.status(200).json("add New Cinema successful");
  } catch (e) {
    return res.status(404).json({
      messge: e,
    });
  }
};

const updateCinema = async (req, res) => {
  try {
    await Service.updateCinema(req);
    return res.status(200).json("Update a successful Cinema");
  } catch (e) {
    return res.status(404).json({
      messge: e,
    });
  }
};

let deleteCinema = async (req, res) => {
  try {
    await Service.deleteCinema(req.body.id);
    return res.status(200).json("Delete a successful Cinema");
  } catch (e) {
    return res.status(404).json({
      messge: e,
    });
  }
};

module.exports = {
  getDetailCinema,
  getAllCinema,
  addNewCinema,
  updateCinema,
  deleteCinema,
};
