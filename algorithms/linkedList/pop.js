export function pop(list) {
    if (!list.head) return null; // Return null if the list is empty

    let current = list.head;

    // If there's only one node in the list
    if (!current.nextNode) {
        const value = current.value; // Store the value to return
        list.head = null; // Set head to null as the list will be empty
        return value; // Return the removed node's value
    }

    // Traverse to the second-to-last node
    while (current.nextNode && current.nextNode.nextNode) {
        current = current.nextNode;
    }

    // Store the value of the last node to return
    const value = current.nextNode.value; 
    current.nextNode = null; // Remove the last node
    return value; // Return the removed node's value
}
