import config from "../config/serverConfig.js";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId
    },
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
    }
  },
  { timestamps: true }
);

userSchema.methods.comparePassword = function compare(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.genJWT = function generate() {
  try {
    const token = jwt.sign(
      { id: this.id, email: this.email },
      config.secret,
      {
        expiresIn: "1h"
      }
    );
    return token;
  } catch (error) {
    console.log("Token not able to create", error);
    throw error;
  }
};

const User = mongoose.model("User", userSchema);
export default User;
