// 队列
export class Queue {
  constructor () {
    this.items = []
  }

  enqueue (element) {
    this.items.push(element)
  }

  dequeue () {
    return this.items.shift()
  }

  front () {
    if (this.items.length === 0) return null
    return this.items[0]
  }

  isEmpty () {
    return this.items.length === 0
  }
  
  size () {
    return this.items.length
  }
}

// 优先级队列
class QueueElement {
  constructor (element,priority) {
    this.element = element;
    this.priority = priority
  }
}

export class PriorityQueue extends Queue {
  enqueue (element, priority) {
    const queueElement = new QueueElement(element,priority)
    if (this.items.length === 0) {
      this.items.push(queueElement)
    } else {
      let added = false
      for (let i = 0; i < this.items.length; i++) {
        const element = this.items[i];
        if (element.priority > queueElement.priority) {
          this.items.splice(i, 0, queueElement)
          added = false
          break
        }
      }
      if (!added) {
        this.items.push(queueElement)
      }
    }
  }
}

// 击鼓传花
export function passGame (nameList, num) {
  const queue = new Queue()
  for (let i = 0; i < nameList.length; i++) {
    const element = nameList[i];
    queue.enqueue(element)
  }
  while (queue.size() > 1 ) {
    for (let i = 1; i < num - 1; i++) {
      queue.enqueue(queue.dequeue())
    }
    queue.dequeue()
  }
  return queue.front()
}
