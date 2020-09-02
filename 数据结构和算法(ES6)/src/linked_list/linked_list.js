// 单向链表
export class Node {
  constructor (element) {
    // 保存元素
    this.element = element;
    // 指向下一个节点
    this.next = null
  }
}

export class LinkedList {
  constructor () {
    this.head = null;
    this.length = 0
  }

  append (element) {
    const newNode = new Node(element)
    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }
    this.length++
  }

  insert (position, element) {
    if (position < 0 || position > this.length -1) return false
    const newNode = new Node(element)
    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      let index = 0
      let current = this.head
      let previous = null
      while (index++ < position) {
        previous = current
        current = current.next
      }
      previous.next = newNode
      newNode.next = current
    }
    this.length++
    return true
  }

  get (position) {
    if (position < 0 || position > this.length -1) return null
    let index = 0
    let current = this.head
    while (index++ < position) {
      current = current.next
    }
    return current.element
  }

  indexOf (element) {
    let current = this.head
    let index = 0
    while (current) {
      if (current.element === element) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }

  removeAt (position) {
    if (position < 0 || position > this.length -1) return null
    let current = this.head
    if (position === 0) {
      this.head = current.next
    } else {
      let index = 0
      let previous = null
      while (index++ < position) {
        previous = current
        current = current.next
      }
      previous.next = current.next
    }
    this.length--
    return current.element

  }

  // update (position, element) {
  //   if (position < 0 || position >= this.length) return false
  //   let current = this.head
  //   let index = 0
  //   while (index++ < position) {
  //     current = current.next
  //   }
  //   current.element = element
  //   return true
  // }

  update (position, element) {
    const result = this.removeAt(position)
    this.insert(position, element)
    return result
  }

  remove () {
    const index = this.indexOf(element);
    if (index === -1) return;
    this.removeAt(index)
  }

  isEmpty () {
    return this.length === 0 
  }

  size () {
    return this.length
  }

}

// 双向链表

class doublyNode extends Node {
  constructor (element) {
    super(element)
    this.prev = null
  }
}

export class DoublyLinkedList extends LinkedList {
  constructor () {
    super()
    this.tail = null
  }
  append (element) {
    const newNode = new doublyNode(element);
    if (this.head === null) { // 原来没有任何元素
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
  }

  insert (position, element) {
    if (position < 0 || position > this.length) return false
    const newNode = new DoublyNode(element);
    if (position === 0) {
      if (this.head === null) {
        this.head = newNode
        this.tail = newNode
      } else {
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
      }
    } else if (position === this.length) {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    } else {
      let index = 0
      let current = this.head
      let previous = null
      while (index++ < position) {
        previous = current
        current = current.next
      }
      previous.next = newNode
      newNode.prev = previous
      newNode.next = current
      current.prev = newNode
    }
    this.length++
    return true
  }

  removeAt (position) {
    if (position < 0 || position > this.length - 1) return null
    let current = this.head
    if (position === 0) {
      if (this.length === 1) {
        this.head = null
        this.tail = null
      } else {
        this.head = this.head.next
        this.head.prev = null
      }
    } else if (position === this.length - 1) {
      current = this.tail
      this.tail.prev.next = null
      this.tail = this.tail.prev
    } else {
      let index = 0
      let previous = null
      while (index++ < position) {
        previous = current
        current = current.next
      }
      previous.next = current.next
      previous.next.prev = previous
    }
    this.length--
    return current.element
  } 
}
