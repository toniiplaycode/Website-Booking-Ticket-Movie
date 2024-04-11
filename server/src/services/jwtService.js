const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const ganneralAccessToken = (payload) => {
  const access_token = jwt.sign(
    {
      ...payload,
    },
    process.env.ACCESS_TOKEN,
    { expiresIn: "1d" }
  );
  return access_token;
};

const ganneralRefreshToken = (payload) => {
  const refresh_token = jwt.sign(
    {
      ...payload,
    },
    process.env.REFRESH_TOKEN,
    { expiresIn: "365d" }
  );
  return refresh_token;
};

const refreshToken = (token) => {
  return new Promise(async (resolve, reject) => {
    try {
      jwt.verify(token, process.env.REFRESH_TOKEN, async (err, user) => {
        if (err) {
          resolve({
            status: "ERR",
            message: "refreshToken ERR",
          });
        }
        const access_token = await ganneralAccessToken({
          id: user.id,
          roleId: user.roleId,
        });
        console.log("access token", access_token);
        resolve({
          status: "OK",
          messge: "refreshToken Ok",
          access_token: access_token,
        });
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  ganneralAccessToken,
  ganneralRefreshToken,
  refreshToken,
};
