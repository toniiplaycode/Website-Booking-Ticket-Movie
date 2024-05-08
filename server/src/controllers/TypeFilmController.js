const Service = require("../services/TypeFilmService");

const getDetail = async (req, res) => {
  try {
    const Id = req.query.id;
    if (!Id) {
      return res.status(200).json({
        status: "ERR",
        message: "It is null",
      });
    }
    const response = await Service.getDetail(Id);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await Service.getAll();
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const addNew = async (req, res) => {
  try {
    await Service.addNew(req);
    return res.status(200).json("Add successful");
  } catch (e) {
    return res.status(404).json({
      message: e.message,
    });
  }
};

const update = async (req, res) => {
  try {
    await Service.update(req);
    return res.status(200).json("Update successful");
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

let deleteOBJ = async (req, res) => {
  try {
    await Service.deleteOBJ(req);
    return res.status(200).json("Delete successful");
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

module.exports = {
  getDetail,
  getAll,
  addNew,
  update,
  deleteOBJ,
};
