const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const cors = require("cors");
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

app.listen("5000", () => {
  console.log("listening from port 5000 ");
});
