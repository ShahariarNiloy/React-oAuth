const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const passportConfig = require("./passport/passportConfig");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: ["niloy"],
    maxAge: 1000 * 60 * 60 * 24,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,PATCH,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoutes);

app.listen("5000", () => {
  console.log("listening on port 5000");
});
