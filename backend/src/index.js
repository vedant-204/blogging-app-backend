import bodyParser from "body-parser";
import express from "express";
import session from "express-session";
import passport from "passport";
import { passportAuth } from "./config/jwt-middleware.js";
import config from "./config/serverConfig.js";
import apiRoutes from "./routes/index.js";

const app = express()

app.use(session({
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: true3
}))

app.use(passport.initialize());
app.use(passport.session());

passportAuth(passport);

app.use(
  cors({
    origin: config.baseUrl ?? "*",
    credentials: true,
  })
);

const startServer = async () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }))

  app.use("/api", apiRoutes);
}
