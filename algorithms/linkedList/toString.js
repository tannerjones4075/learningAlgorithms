export function toString(list) {
    let current = list.head;
    let result = ""; // Initialize an empty string to accumulate the values

    while (current) {
        result += current.value; // Add the current value to the result
        if (current.nextNode) {
            result += " -> "; // Add a separator if there is a next node
        }
        current = current.nextNode; // Move to the next node
    }

    return result; // Return the final string representation
}
