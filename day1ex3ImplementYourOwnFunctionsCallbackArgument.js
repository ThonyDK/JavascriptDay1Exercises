//a)
const animals = ["Tiger", "Elephant", "Horse", "Cat", "Dog"]
function Filter(array, predicate) {
    const result = []
    for (const item in array) {
        const should_include = predicate(item)
        if (should_include) {result.push(item) }
    }
    return result
}
function has_double_letters(word) {
    let previous_letter = ""
    for (const letter of word) {
        if (letter === previous_letter) {
            return true
        }
        previous_letter = letter
    }
    return false
}
console.log(filter(animals,has_double_letters));
console.log(animals.filter(has_double_letters));


//b)
function myMap(array,callback) {
    let newArray = [];
    array.forEach(element => {
        newArray.push(callback(element))
    });
    return newArray
}

