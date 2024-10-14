import { HashTable } from "./HashTableModuleFactory.js"; // Use the correct casing

// Example usage
const myHashTable = new HashTable();

// Adding entries
myHashTable.set("Carlos", "Bill");
console.log(myHashTable.get("Carlos")); // Should output: I am Carlos Smith.

// Updating the value for the same key
myHashTable.set("Carlos", "Smith");
console.log(myHashTable.get("Carlos", "Smith")); // Should output: I am the new value.

// Trying to get a key that hasn't been set
console.log(`Undefined: ${myHashTable.get("NonexistentKey", "Smith")}`); // Should output: undefined

// Checking if keys exist
console.log(myHashTable.has("Carlos", "Smith")); // Should output: true
console.log(myHashTable.has("Tanner", "Smith")); // Should output: false

// Removing an entry
console.log(myHashTable.remove("Carlos", "Smith")); // Should output: true
console.log(`Remove: ${myHashTable.get("Carlos", "Smith")}`); // Should output: undefined (after removal)

// Checking length
console.log(myHashTable.length()); // Should output the current number of entries

// Adding a new entry
myHashTable.set("Tanner", "Johnson");
console.log(`Get: ${myHashTable.get("Tanner", "Johnson")}`); // Should output: I am Tanner Johnson.

// Clearing the hash table
myHashTable.clear();
console.log(`Undefined: ${myHashTable.get("Tanner", "Johnson")}`); // Should output: undefined (after clearing)

// Adding another entry
myHashTable.set("TJ", "Williams", "I am the newest value.");
console.log(`Hash table keys:`)
// Getting keys
console.log(myHashTable.keys()); // Should output: ["someHashKey"]

console.log(`Hash table entries:`)
// Getting entries
console.log(myHashTable.entries()); // Should output: [["someHashKey", "I am the newest value."]]

// const test = new HashTable();

// test.set('apple', 'red');
// test.set('banana', 'yellow');
// test.set('carrot', 'orange');
// test.set('dog', 'brown');
// test.set('elephant', 'gray');
// test.set('frog', 'green');
// test.set('grape', 'purple');
// test.set('hat', 'black');
// test.set('ice cream', 'white');
// test.set('jacket', 'blue');
// test.set('kite', 'pink');
// test.set('lion', 'golden');
// test.set('moon', 'silver')
// test.set('Star', 'black')



// console.log(test.get('apple')); // Should output: red
// console.log(test.get('banana')); // Should output: yellow
// console.log(test.get('nonexistent')); // Should output: undefined
// console.log(test.set("Hello", "World"))

// // Checking keys and values
// console.log(`Here are the keys in the Hash Table:`)
// console.log(test.keys()); // Should output an array of the keys
// console.log(`Here are the values in the Hash Table:`)
// console.log(test.values()); // Should output an array of the values
// console.log(`Here are the entries of the Hash Table`)
// console.log(test.entries())
// console.log(test.length())
// // console.log(test.clear())
// console.log(test.has('apple'))
// console.log(test.keys());
// console.log(test.get('apple'));

// const noValues = new HashTableNoValues();

// noValues.set('apple');
// noValues.set('banana');
// noValues.set('carrot');
// noValues.set('dog');
// noValues.set('elephant');

// console.log(noValues.length()); // Should print 5
// console.log(noValues.keys());    // Should print an array of the keys: ['apple', 'banana', 'carrot', 'dog', 'elephant']


