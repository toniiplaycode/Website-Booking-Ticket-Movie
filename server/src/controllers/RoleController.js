const Service = require("../services/RoleService");

const getAll = async (req, res) => {
  try {
    const response = await Service.getAll();
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      messge: e,
    });
  }
};

const addNew = async (req, res) => {
  try {
    await Service.addNew(req.body);
    return res.status(200).json("Add successful");
  } catch (e) {
    return res.status(404).json({
      messge: e,
    });
  }
};

const update = async (req, res) => {
  try {
    await Service.update(req);
    return res.status(200).json("Update successful");
  } catch (e) {
    return res.status(404).json({
      messge: e,
    });
  }
};

let deleteOBJ = async (req, res) => {
  try {
    await Service.deleteOBJ(req.body.id);
    return res.status(200).json("Delete successful");
  } catch (e) {
    return res.status(404).json({
      messge: e,
    });
  }
};

module.exports = {
  getAll,
  addNew,
  update,
  deleteOBJ,
};
