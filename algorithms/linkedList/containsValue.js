export function containsValue(list, value) {
    let current = list.head;

    while (current) {
        if (current.value === value) {
            return true; // Return true if the value is found
        }
        current = current.nextNode; // Move to the next node
    }

    return false; // Return false if the value is not found
}
