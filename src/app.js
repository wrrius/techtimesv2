"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var http_errors_1 = require("http-errors");
var express_1 = require("express");
var path_1 = require("path");
var morgan_1 = require("morgan");
var cookie_parser_1 = require("cookie-parser");
var indexRouter = require("./routes/index.ts");
var usersRouter = require("/routes/users");
exports.app = (0, express_1.default)();
// view engine setup
exports.app.set("views", path_1.default.join(__dirname, "views"));
exports.app.set("view engine", "jade");
exports.app.use((0, morgan_1.default)("dev"));
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.urlencoded({ extended: false }));
exports.app.use((0, cookie_parser_1.default)());
exports.app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
exports.app.use("/", indexRouter);
exports.app.use("/users", usersRouter);
// catch 404 and forward to error handler
exports.app.use(function (req, res, next) {
    next((0, http_errors_1.default)(404));
});
// error handler
exports.app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render("error");
});
module.exports = exports.app;
