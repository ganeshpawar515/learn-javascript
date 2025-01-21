var listingPrice=799;
var sellingPrice=199;
var percentage;

// percentage=(sellingPrice/listingPrice)*100
// var percentageOff=100-percentage
// console.log("Percentage off: "+percentageOff)

var discountPercentage = ((listingPrice - sellingPrice)/listingPrice)*100
console.log(discountPercentage)

displayDiscountPercentage = Math.round(discountPercentage)

console.log(displayDiscountPercentage+"% off")

var result = listingPrice > sellingPrice;

console.log(typeof result)
