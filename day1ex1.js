//1) Create a new javascript file and add these functions.
//Function Declaration
//Observe: no return type, no type on parameters
function add(n1, n2){
    return n1 +n2;
}

//Function Expression
const sub = function(n1,n2){
    return n1 - n2
}

//Callback example
const cb = function(n1,n2, callback){
    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
}
//2 Call the functions above as sketched below:
console.log(add(1,2));//Result 3
console.log(add())//Represent a function
console.log(add(1,2,3))//Result is 3. The last input has nothing to do in it.
console.log(add(1))//Result NaN
console.log(cb(2,3,add));//Result = 6
console.log(cb(4,3,sub));//Result = 1
//console.log(cb(3,3,add()));//Throws error. Because callback is not a function.
console.log(cb(3,"hh",add));

//4)
const mul = function (n1,n2){
    return n1 * n2
}
console.log(cb(2,3,mul))

//5)
console.log(cb(3,3,function (n1,n2) {
    return n1/n2
}));

