export function findValue(list, index) {
    let current = list.head;
    let count = 0; // Initialize a counter to track the current index

    while (current) {
        if (count === index) {
            return current.value; // Return the value at the specified index
        }
        count++; // Increment the index counter
        current = current.nextNode; // Move to the next node
    }

    return `${index} not found`// Return null if the index is out of bounds
}
