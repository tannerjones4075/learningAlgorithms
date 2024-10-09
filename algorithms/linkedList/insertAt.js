export function insertAt(list, value, index) {
    // Check for invalid index
    if (index < 0) {
        throw new Error("Index cannot be negative.");
    }

    const newNode = { value, nextNode: null }; // Create the new node

    // Special case for inserting at the head
    if (index === 0) {
        newNode.nextNode = list.head; // Point new node to the current head
        list.head = newNode; // Update head to be the new node
        return true;
    }

    let current = list.head;
    let previous = null;
    let count = 0; // Counter to track the current index

    // Traverse the list to find the insertion point
    while (current && count < index) {
        previous = current; // Move previous to current
        current = current.nextNode; // Move to the next node
        count++; // Increment the index counter
    }

    // If we reached the end without finding the index, insert at the end
    if (count === index) {
        if (previous) {
            previous.nextNode = newNode; // Link previous node to new node
        }
        newNode.nextNode = current; // Link new node to current node
        return true; // Indicate successful insertion
    }

    // If the index is greater than the length of the list
    throw new Error("Index is out of bounds.");
}
