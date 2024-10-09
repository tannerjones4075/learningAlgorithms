export function atIndex(list, index) {
    let current = list.head;
    let count = 0;

    while (current) {
        if (count === index) {
            return current;
        }
        count++;
        current = current.nextNode;
    }

    return null;

}