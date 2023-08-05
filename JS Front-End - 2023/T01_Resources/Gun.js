// toFixed(): To format a number, use the toFixed() method (converts to string):
grade.toFixed(2);    //The name is: Petar, grade: 3.56


// typeof: The typeof operator returns a string indicating the type of an operand
const val = 5;
console.log(typeof val); // number


// Rest operator: Expression that unpacks values from arrays or objects, into distinct variables
let numbers = [10, 20, 30, 40, 50]; let [a, b, ...elems] = numbers;
console.log(a) // 10 
console.log(b) // 20
console.log(elems) // [30, 40, 50]


//For-of Loop: Iterates through all elements in a collection, Cannot access the current index
for (let el of collection) {
    // Process the value here
}



//***** Modify the Array ******/

//Pop: Removes the last element from an array and returns that element, This method changes the length of the array
let nums = [10, 20, 30, 40, 50, 60, 70];
console.log(nums.length); // 7 
console.log(nums.pop()); // 70
console.log(nums.length); // 6
console.log(nums); // [ 10, 20, 30, 40, 50, 60 ]


//Push: The push() method adds one or more elements to the end of an array and returns the new length of the array
let nums = [10, 20, 30, 40, 50, 60, 70];
console.log(nums.length); // 7 
console.log(nums.push(80)); // 8 (nums.length) 
console.log(nums); // [ 10, 20, 30, 40, 50, 60, 70, 80 ]


//Shift: The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array
let nums = [10, 20, 30, 40, 50, 60, 70];
console.log(nums.length); // 7 
console.log(nums.shift()); // 10 (removed element) 
console.log(nums); // [ 20, 30, 40, 50, 60, 70 ]


//Unshift: The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array
let nums = [40, 50, 60];
console.log(nums.length); // 3 
console.log(nums.unshift(30)); // 4 (nums.length) 
console.log(nums.unshift(10, 20)); // 6 (nums.length) 
console.log(nums); // [ 10, 20, 30, 40, 50, 60 ]


//Splice: Changes the contents of an array by removing or replacing existing elements and / or adding new elements
let nums = [1, 3, 4, 5, 6];
nums.splice(1, 0, 2); // inserts at index 1 
console.log(nums); // [ 1, 2, 3, 4, 5, 6 ]
nums.splice(4, 1, 19); // replaces 1 element at index 4 
console.log(nums); // [ 1, 2, 3, 4, 19, 6 ]
let el = nums.splice(2, 1); // removes 1 element at index 2 
console.log(nums); // [ 1, 2, 4, 19, 6 ]
console.log(el); // [ 3 ]


//Reverse: Reverses the array
let arr = [1, 2, 3, 4];
arr.reverse();
console.log(arr); // [ 4, 3, 2, 1 ]


//Join: Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string
let elements = ['Fire', 'Air', 'Water'];
console.log(elements.join()); // "Fire,Air,Water" 
console.log(elements.join('')); // "FireAirWater" 
console.log(elements.join('-')); // "Fire-Air-Water" 
console.log(['Fire'].join(".")); // Fire


//Slice: The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified
let fruits = ['Banana', 'Orange', 'Lemon', 'Apple'];
let citrus = fruits.slice(1, 3);
let fruitsCopy = fruits.slice();
// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple'] 
// citrus contains ['Orange', 'Lemon']


//Includes: Determines whether an array contains a certain element, returning true or false as appropriate
// array length is 3
// fromIndex is -100
// computed index is 3 + (-100) = -97 
let arr = ['a', 'b', 'c'];
arr.includes('a', -100); // true 
arr.includes('b', -100); // true 
arr.includes('c', -100); // true 
arr.includes('a', -2); // false


//IndexOf: The indexOf() method returns the first index at which a given element can be found in the array. Output is -1 if element is not present
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison')); // 1
// start from index 2 
console.log(beasts.indexOf('bison', 2)); // 4 
console.log(beasts.indexOf('giraffe')); // -1


//ForEach: The forEach() method executes a provided function once for each array element. Converting a for loop to forEach
const items = ['item1', 'item2', 'item3']; const copy = [];
// For loop
for (let i = 0; i < items.length; i++) {
    copy.push(items[i]);
}
// ForEach
items.forEach(item => { copy.push(item); });


//Map: Creates a new array with the results of calling a provided function on every element in the calling array
let numbers = [1, 4, 9];
let roots = numbers.map(function (num, i, arr) {
    return Math.sqrt(num)
});
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]


//Find: Returns the first found value in the array, if an element in the array satisfies the provided testing function or undefined if not found
let array1 = [5, 12, 8, 130, 44];
let found = array1.find(function (element) {
    return element > 10;
});
console.log(found); // 12


//Filter: Creates a new array with filtered elements only. Calls a provided callback function once for each element in an array. Does not mutate the array on which it is called.
let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
// Filter array items based on search criteria (query)
function filterItems(arr, query) {
    return arr.filter(function (el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
};
console.log(filterItems(fruits, 'ap')); // ['apple', 'grapes']




//***** Manipulating Strings ******/

//indexOf(substr)
let str = "I am JavaScript developer";
console.log(str.indexOf("Java")); // Expected output: 5 
console.log(str.indexOf("java")); // Expected output: -1

//lastIndexOf(substr)
let str = "Intro to programming";
let last = str.lastIndexOf("o");
console.log(last); // Expected output: 11

//substring(startIndex, endIndex)
let str = "I am JavaScript developer";
let sub = str.substring(5, 10);
console.log(sub); // Expected output: JavaS

//replace(search, replacement)
let text = "Hello, john@softuni.bg, you have been using john@softuni.bg in your registration.";
let replacedText = text.replace(".bg", ".com");
console.log(replacedText);
// Hello, john@softuni.com, you have been using john @softuni.bg in your registration.

//split(separator)
let text = "I love fruits";
let words = text.split(' ');
console.log(words); // Expected output: ['I', 'love', 'fruits']

//includes(substr)
let text = "I love fruits.";
console.log(text.includes("fruits")); // Expected output: True 
console.log(text.includes("banana")); // Expected output: False

//repeat(count)
let n = 3;
for (let i = 1; i <= n; i++) {
    console.log('*'.repeat(i));
}

// trim(): Use trim() method to remove whitespaces (spaces, tabs, no-break space, etc. ) from both ends of a string.
let text = " Annoying spaces ";
console.log(text.trim()); // Expected output: "Annoying spaces"

//trimStart() or trimEnd(): Use trimStart() or trimEnd() to remove whitespaces only at the beginning or at the end
let text = " Annoying spaces ";
text = text.trimStart();
text = text.trimEnd();
console.log(text); // Expected output: "Annoying spaces"

//startsWith(): Use startsWith() to determine whether a string begins with the characters of a specified substring
let text = "My name is John";
console.log(text.startsWith('My')); // Expected output: true

//endsWith(): Use endsWith() to determine whether a string ends with the characters of a specified substring
let text = "My name is John";
console.log(text.endsWith('John')); // Expected output: true

//padStart(): Use padStart() to add to the current string another substring at the start until a length is reached.
let text = "010";
console.log(text.padStart(8, '0')); // Expected output: 00000010

//padEnd(): Use padEnd() to add to the current string another substring at the end until a length is reached.
let sentence = "He passed away";
console.log(sentence.padEnd(20, '.')); // Expected output: He passed away......




//***** Methods of Objects ******/

//keys: Get array of all property names (keys).
Object.keys(cat); // ['name', 'age']

//values: Get array with of all property values
Object.values(cat); // ['Tom', 5]

//key - value: Get and array of all properties as key - value tuples 
Object.entries(cat); // [['name', 'Tom'], ['age', 5]]



//***** JSON Methods *****/

//JSON.stringify(): We can convert object into JSON string using JSON.stringify(object) method
let text = JSON.stringify(obj);
//JSON.parse(): We can convert JSON string into object using JSON.parse(text) method
let obj = JSON.parse(text);




//for-in: We can use for-in loop to iterate through the keys
let assocArr = {};
assocArr['one'] = 1;
assocArr['two'] = 2;
assocArr['three'] = 3;
for (let key in assocArr) {
    console.log(key + " = " + assocArr[key]);
}

//.hasOwnProperty(): Check if a key is present:
let assocArr = { /* entries */ };
if (assocArr.hasOwnProperty('John Smith')) { /* Key found */ }

//Remove entries:
delete assocArr['John Smith'];



//****** DOM Manipulations ******/
appendChild()
removeChild()
replaceChild()

