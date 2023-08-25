const vehicleOne = {
  brand: "Ford",
  model: "머스탱",
  type: "car",
  year: 2022,
  color: "red",
  resgistration: {
    city: "Suwon",
    type: "렌트차",
  },
};

myVehicle(vehicleOne);
function myVehicle({ model, type, resgistration: { city, type: regType } }) {
  const message =
    "내 차는 " + model + "이고,이건 " + city + "에서 써." + regType + "야";

  let test = model ? "머스탱이다." : "짭스탱이다.";

  console.log(test);
}
