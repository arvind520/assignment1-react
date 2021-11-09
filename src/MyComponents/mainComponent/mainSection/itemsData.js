let brandsNames = ["Apple", "Beats", "Samsung", "Siemens"];
let colorsNames = ["Blue", "Red", "Black", "Yellow", "Pink", "Wheat"];
let imagesUrl = "assets/img/headphone.jpg";
let ratingUrl = "assets/img/stars.JPG";

function generateRandomName() {
  let randomName = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  for (let i = 0; i <= 8; i++) {
    randomName += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  return randomName;
}

function generateRandomMRPandOfferPrice() {
  let mrp = Math.floor(Math.random() * 10000) + 500;
  let profitPercentage = Math.floor(Math.random() * 50);
  let profitPrice = Math.floor(mrp - (mrp * profitPercentage) / 100);
  return {
    mrp: mrp,
    profitPrice: profitPrice,
  };
}

function pickRandomBrand() {
  let l = brandsNames.length;
  let randomIndex = Math.floor(Math.random() * l);
  return brandsNames[randomIndex];
}

function pickRandomColor() {
  let l = colorsNames.length;
  let randomIndex = Math.floor(Math.random() * l);
  return colorsNames[randomIndex];
}

export const itemsData = [];

for (let k = 0; k < 500; k++) {
  let prices = generateRandomMRPandOfferPrice();
  itemsData.push({
    productName: generateRandomName(),
    imgSrc: imagesUrl,
    mrp: prices.mrp,
    offerPrice: prices.profitPrice,
    brand: pickRandomBrand(),
    color: pickRandomColor(),
    ratingImg: ratingUrl,
  });
}
