const prisma = require("../src/configs/prisma");

const addPromo = [
  {
    promo_title: "ลดร้านที่ 1 10%",
    promo_image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg",
  },
  {
    promo_title: "ลดร้านที่ 2 10%",
    promo_image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg",
  },
  {
    promo_title: "ลดร้านที่ 3 10%",
    promo_image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg",
  },
];

const addShop = [
  { shop_name: "ร้านที่ 1", promo_id: 1 },
  { shop_name: "ร้านที่ 2", promo_id: 2 },
  { shop_name: "ร้านที่ 3", promo_id: 3 },
];

const promoAdd = async () => {
  try {
    await prisma.promocode.createMany({
      data: addPromo,
    });
  } catch (err) {
    console.log(err);
  }
};

const shopAdd = async () => {
  try {
    await prisma.shop.createMany({
      data: addShop,
    });
  } catch (err) {
    console.log(err);
  }
};

promoAdd();
// shopAdd();
