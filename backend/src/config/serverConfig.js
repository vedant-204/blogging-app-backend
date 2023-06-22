import dotenv from "dotenv";
dotenv.config();

const config = {
  DB_URL: process.env.DB_URL,
  baseUrl: process.env.BASE_URL,
  sessionSecret: process.env.SESSION_SECRET,
  secret: process.env.JWT_SECRET,
  expireTime: process.env.JWT_EXPIRATION_TIME
};

export default config;
