export function tail(list) {
    let current = list.head;
    if (!current) return null;
    while (current.nextNode) {
        current = current.nextNode;
    }
    return current

}