const userRouter = require("./UserRouter");
const filmRouter = require("./FilmRouter");
const cinemaRouter = require("./CinemaRouter");
const cinemaRoomRouter = require("./CinemaRoomRouter");
const roleRouter = require("./RoleRouter");
const ConmentRouter = require("./ConmentRouter");
const TicketRouter = require("./TicketRouter");
const TypeFilmRouter = require("./TypeFilmRouter");
const CalendarReleaseRouter = require("./CalendarReleaseRouter");
const PaymentMethodRouter = require("./PaymentMethodRouter");

const routes = (app) => {
  app.use("/api/user", userRouter);
  app.use("/api/film", filmRouter);
  app.use("/api/cinema", cinemaRouter);
  app.use("/api/cinemaRoom", cinemaRoomRouter);
  app.use("/api/role", roleRouter);
  app.use("/api/conment", ConmentRouter);
  app.use("/api/typeFilm", TypeFilmRouter);
  app.use("/api/ticket", TicketRouter);
  app.use("/api/paymentMethod", PaymentMethodRouter);
  app.use("/api/calendarRelease", CalendarReleaseRouter);
};

module.exports = routes;
