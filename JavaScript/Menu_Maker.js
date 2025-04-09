const menu = {
  _meal: "",
  _price: 0,
  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      this._meal = mealToCheck;
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      this._price = priceToCheck;
    }
  },
  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's Special is ${this._meal} for $${this._price}!`;
    } else {
      return `Meal or price was not set correctly!`;
    }
  },
};

// Got Creative with an array of meals and prices
const meals = [
  "Pasta al Pesto",
  "Gnocchi",
  "Lasagna",
  "Amatriciana",
  "Arrabiata",
];
const prices = [5, 10, 8, 15, 12];

// Randomizer
const randomMealIndex = Math.floor(Math.random() * meals.length);
const randomPriceIndex = Math.floor(Math.random() * prices.length);

// Assign the random meal and price
menu.meal = meals[randomMealIndex];
menu.price = prices[randomPriceIndex];

console.log(menu.todaysSpecial);
