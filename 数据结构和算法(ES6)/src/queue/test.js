import {PriorityQueue} from './queue'

const queue = new PriorityQueue()

queue.enqueue("A",1)
queue.enqueue("B",2)
queue.enqueue("C",5)
queue.enqueue("D",8)

queue.items.forEach(item => {
  console.log(item.element,item.priority);
  
})

console.log(queue.items);
