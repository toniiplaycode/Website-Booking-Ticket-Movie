const Service = require("../services/ConmentService");

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
      message: e,
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
      message: "check",
    });
  }
};

module.exports = {
  getAll,
  addNew,
  update,
  deleteOBJ,
};
