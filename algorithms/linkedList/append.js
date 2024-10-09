import { createNode } from "./createNode.js";

export function append(list, value) {
    const newNode = createNode(value);
    if (!list.head) {
        list.head = newNode;
    } else {
        let current = list.head;
        while (current.nextNode) {
            current = current.nextNode;
        }
        current.nextNode = newNode;
    }
}