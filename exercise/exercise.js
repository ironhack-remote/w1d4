console.log("cars", cars);

// We have 4 exercises to do:
// STEP 1

// You were asked to submit a list of all the brands
// you currently have in your stand! How could you do that?

/* 
const getCarBrands = cars.map(function (car) {
   return car.brand
})
*/
const getCarBrands = cars.map((car) => car.brand);

// STEP 2

// We want to advertise all the cars below 15.000€ to the public
// Can you deliver a list of all of the cars that meet that requirement?

/* 
const getCarsWithPriceBelow15000 = cars.filter(function (car) {
   return car.price <15000
})
*/

const getCarsWithPriceBelow15000 = cars.filter((car) => car.price < 15000);

// STEP 3

// We want to know how much our total collection of cars is worth!
// To do that, we have to sum all of the car values.
// How could we do that?

/* 
const totalCarPrices = cars.reduce(function (acc,car) {
return acc + car.price
}, 0)
*/

const totalCarPrices = cars.reduce((acc, car) => acc + car.price, 0);

// STEP 4

// You were asked to deliver a list of the cars
// but from the least expensive to the most expensive one!
// How could you --sort-- the array to achieve that?
