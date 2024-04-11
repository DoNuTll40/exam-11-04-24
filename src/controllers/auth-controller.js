const userServices = require("../services/user-service");
const createError = require("../utils/createError");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registerUsers = async (req, res, next) => {
  try {

    const { user_usernmae, user_password, confirmPassword } = req.body;

    if(user_password !== confirmPassword){
      return createError(400, "รหัสผ่านไม่ตรงกัน")
    }

    const isUserExist = await userServices.getUserByEmail(value.user_email);

    if (isUserExist) {
      return createError(400, "User already exist");
    }

    const hasPassword = await bcrypt.hash(user_password, 10);

    const create = await userServices.createUser(user_usernmae, hasPassword);

    if (create) {
      return res.json({ message: "Create user success!" });
    } else {
      return createError(400, "ไม่สามารถสร้างผู้ใช้งานใหม่ได้");
    }
  } catch (err) {
    next(err);
    console.log(err);
  }
};

exports.loginUsers = async (req, res, next) => {
  try {
    const { user_usernmae, user_password } = req.body;

    if (!user_usernmae || !user_password) {
      return createError(400, "username or password are require");
    }

    if (typeof user_usernmae !== "string" || typeof user_password !== "string") {
      return createError(400, "username or password invalid");
    }

    const isUserExist = await userServices.checkLoginUser(user_email);

    if (isUserExist === null) {
      return createError(400, "ชื่อไม่พบผู้ใช้งานบบ");
    }

    const isPasswordExist = await bcrypt.compare(
      user_password,
      isUserExist.user_password
    );

    if(!isPasswordExist){
        return createError(400, "รหัสผ่านผิดหลาด")
    }

    const token = jwt.sign(
      { id: isUserExist.user_id },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );

    res.json({ token, message: "login success" });
  } catch (err) {
    next(err);
    console.log(err);
  }
};

exports.getMe = (req, res, next) => {
  res.json(req.user);
};
