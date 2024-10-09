export function size(list) {
    let count = 0;
    let node = list.head;
    while (node) {
        count++;
        node = node.nextNode;
    }
    return count;
}