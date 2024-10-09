export function removeAt(list, index, value) {
    let current = list.head;
    let previous = null;
    let count = 0; // Counter to track the current index

    // Special case for the head of the list
    if (index === 0 && current && current.value === value) {
        list.head = current.nextNode; // Remove head
        return true;
    }

    while (current) {
        if (count === index && current.value === value) {
            // Remove the node
            if (previous) {
                previous.nextNode = current.nextNode; // Bypass the current node
            }
            return true; // Return true to indicate removal was successful
        }
        previous = current; // Move previous to current
        current = current.nextNode; // Move to the next node
        count++; // Increment the index counter
    }

    return false; // Return false if no matching node was found
}
