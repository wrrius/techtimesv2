import { dirname } from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import createHttpError from "http-errors";
import Express from "express";
import morgan from "morgan";
import path from "path";

import connectToDatabase from "./routes/index.js";
//import usersRouter from "./src/routes/users";

let app = Express();

// view engine setup
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("views", path.join(__dirname, "views"));

app.use(morgan("dev"));
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(Express.static(path.join(__dirname, "public")));

app.use("/", connectToDatabase);
//app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createHttpError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
