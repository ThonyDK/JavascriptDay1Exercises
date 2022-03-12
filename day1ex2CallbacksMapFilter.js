//1
//Original Array
const names = ["Hans","Per","Kurt","Sofie","Marie","Ib"]
names.forEach(name => console.log(name));

//new Array
const namesFiltered = names.filter(function (name){
    return name.length <=3;
})
console.log("New Arraylist: ")
namesFiltered.forEach(name=> console.log(name))

//2 Make the names from the arraylist above to uppercase letters.

const makeToUppercase = names.map(name => name.toUpperCase())
console.log(makeToUppercase)

//3)

//4)
const cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

const newerCars = cars.filter(car => car.year > 1999)
console.log(newerCars)

const allVolvos = cars.filter(car => car.model = 'Volvo')
console.log(allVolvos)

const priceBelow = cars.filter(car => car.price < 5000)
console.log(priceBelow)