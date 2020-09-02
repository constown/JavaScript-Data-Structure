import {LinkedList} from './linked_list'
const linkedList = new LinkedList()

linkedList.append("A")
linkedList.append("B")
linkedList.append("C")
linkedList.append("D")
linkedList.removeAt("1")
// console.log(linkedList.update(1, "NPC"));
// console.log(linkedList);
// console.log(linkedList.indexOf("D"));

const linkedList2 = new DoublyLinkedList()

linkedList2.append("A")
linkedList2.append("B")
linkedList2.append("C")
linkedList2.append("D")
console.log(linkedList2);
