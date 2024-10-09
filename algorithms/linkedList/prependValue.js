import { createNode } from "./createNode.js";

export function prepend(list, value) {
    const newNode = createNode(value);
    newNode.nextNode = list.head;
    list.head = newNode;

}