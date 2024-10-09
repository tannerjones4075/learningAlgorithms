export function linkedList() {
    return {
        head: null, // will point to first element in linkedlist but is initialized at null

        display() {
            let current = this.head; // initializes a variable current to point to a head of the list
            const values = [];
            while (current) { // loops through the node as long as current is null
                values.push(current.value); // add value to the list 'values'
                current = current.nextNode; // updates current to point to next node in the list
            }
            return values;
        },
    };
}