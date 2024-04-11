const userRouter = require("./UserRouter");
const filmRouter = require("./FilmRouter");
const cinemaRouter = require("./CinemaRouter");
const cinemaRoomRouter = require("./CinemaRoomRouter");
const roleRouter = require("./RoleRouter");
const ShowTimeRouter = require("./STRouter");
const ConmentRouter = require("./ConmentRouter");
const TicketRouter = require("./TicketRouter");
const TypeFilmRouter = require("./TypeFilmRouter");

const routes = (app) => {
  app.use("/api/user", userRouter);
  app.use("/api/film", filmRouter);
  app.use("/api/cinema", cinemaRouter);
  app.use("/api/cinemaRoom", cinemaRoomRouter);
  app.use("/api/role", roleRouter);
  app.use("/api/showtime", ShowTimeRouter);
  app.use("/api/Conment", ConmentRouter);
  app.use("/api/TypeFilm", TypeFilmRouter);
};

module.exports = routes;
