const UserService = require("../services/UserService");
const jwtService = require("../services/jwtService");

const getDetailUser = async (req, res) => {
  try {
    const UserId = req.params.id;
    if (!UserId) {
      return res.status(200).json({
        status: "ERR",
        messge: "The userId is null",
      });
    }
    const response = await UserService.getDetailUser(UserId);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      messge: e,
    });
  }
};

const getAllUser = async (req, res) => {
  try {
    const response = await UserService.getAllUser();
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      messge: e,
    });
  }
};

const createNewUser = async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const isCheckEmail = reg.test(email);
    if (!isCheckEmail) {
      return res.status(200).json({
        status: "ERR",
        messge: "The input is email",
      });
    }
    if (!email || !password || !firstName || !lastName) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    }
    const response = await UserService.createNewUser(req.body);
    return res.status(200).json("Create user successful");
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    await UserService.updateUser(req);
    return res.status(200).json("Update user successful ");
  } catch (e) {
    return res.status(404).json({
      messge: e,
    });
  }
};

const updateRole = async (req, res) => {
  try {
    await UserService.updateRole(req);
    return res.status(200).json("Update Role successful");
  } catch (e) {
    return res.status(404).json({
      messge: e,
    });
  }
};

let deleteUser = async (req, res) => {
  try {
    await UserService.deleteUser(req.body.id);
    return res.status(200).json("Delete user successful ");
  } catch (e) {
    return res.status(404).json({
      messge: e,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const isCheckEmail = reg.test(email);
    if (!email || !password) {
      return res.status(200).json({
        status: "ERR",
        messge: "The input is required" + email + password,
      });
    } else if (!isCheckEmail) {
      return res.status(200).json({
        status: "ERR",
        messge: "The input is email",
      });
    }
    const response = await UserService.loginUser(req.body);
    const { refresh_token, ...newReponse } = response;
    res.cookie("refresh_token", refresh_token, {
      httpOnly: true,
      secure: false,
      samesite: "strict",
      path: "/",
    });
    return res.status(200).json({ ...newReponse, refresh_token });
  } catch (e) {
    return res.status(404).json({
      messge: e,
    });
  }
};

const logoutUser = async (req, res) => {
  try {
    res.clearCookie("refresh_token");
    return res.status(200).json({
      status: "OK",
      message: "Logout successfully",
    });
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const refreshToken = async (req, res) => {
  try {
    const token = req.cookies.refresh_token;
    if (!token) {
      return res.status(200).json({
        status: "ERR",
        messge: "The token is required",
      });
    }
    const response = await jwtService.refreshToken(token);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      messge: e,
    });
  }
};

module.exports = {
  getDetailUser,
  getAllUser,
  createNewUser,
  updateUser,
  updateRole,
  deleteUser,
  loginUser,
  logoutUser,
  refreshToken,
};
