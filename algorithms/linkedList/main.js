// index.js
import { linkedList } from './linkedList.js';
import { append } from './append.js';
import { prepend } from './prependValue.js';
import { size } from './size.js';
import { head } from './head.js';
import { tail } from './tail.js';
import { atIndex } from './atIndex.js';
import { pop } from './pop.js';
import { containsValue } from './containsValue.js';
import { findValue } from './findValue.js';
import { toString } from './toString.js';
import { removeAt } from './removeAt.js';
import { insertAt } from './insertAt.js';

const list = linkedList();
prepend(list, 1);
prepend(list, 2);
console.log(list.display()); // [2, 1]

append(list, 3);
console.log(list.display()); // [2, 1, 3]
console.log(size(list)); // 3
console.log(head(list)) // 2
console.log(tail(list)) // 3
console.log(atIndex(list, 1))
console.log(`Contains: ${containsValue(list, 10)}`); // Should log "Contains 2: true"
append(list, 10);
console.log(`Found: ${findValue(list, 10)}`); // Should log "Contains 2: true"

// Testing pop
const poppedValue = pop(list);
console.log(`Popped value: ${poppedValue}`); // Popped value: 4
console.log(list.display()); // [2, 1, 3]

const anotherList = linkedList();
append(anotherList, 4);
prepend(anotherList, 5);
console.log(anotherList.display()); // [5, 4]
console.log(size(anotherList)); // 2
console.log(anotherList)
console.log(list)
console.log(`FindValue: ${findValue(list, 2)}`); // Should log 1

console.log(toString(list)); // Should log "2 -> 1 -> 0"



const animalList = new linkedList();

append(animalList, "dog");
append(animalList, "cat");
append(animalList, "parrot");
append(animalList, "hamster");
append(animalList, "snake");
append(animalList, "turtle");

console.log(animalList.display())
console.log(removeAt(animalList, 0, "dog")); // Should log true (removes node with value dog)
console.log(animalList.display())
console.log(insertAt(animalList, "puppy", 0));
console.log(animalList.display())
insertAt(list, 1000, 2)
console.log(list.display())
