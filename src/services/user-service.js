const prisma = require("../configs/prisma");

exports.getUserByEmail = (user_username) => {
  return prisma.users.findFirst({
    where: {
      user_username,
    },
  });
};

exports.createUser = (user_username, hasPassword) => {
  return prisma.users.create({
    data: {
      user_password: hasPassword,
      user_username,
    },
  });
};

exports.checkLoginUser = (user_username) => {
  return prisma.users.findFirst({
    where: {
      user_username,
    },
  });
};

exports.getUserById = (id) => {
  return prisma.users.findFirst({
    where: {
      user_id: +id,
    },
  });
};
