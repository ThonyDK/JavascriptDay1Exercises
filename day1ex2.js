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
