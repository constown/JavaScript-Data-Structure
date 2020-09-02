export class Stack {
  constructor () {
    this.items = []
  }

  push (element) {
    this.items.push(element)
  }

  pop () {
    return this.items.pop()
  }

  peek () {
    if (this.items.length === 0) return null
    return this.items[this.items.length-1]
  }

  isEmpty () {
    return this.items.length === 0
  }
  
  size () {
    return this.items.length
  }
}

// 十进制转换为二进制
export function dec2bin (num) {
  const stack = new Stack()
  // 循环取余数
  while (num > 0) {
    let remainder = num % 2
    num = Math.floor(num / 2)
    stack.push(remainder)
  }
  // 拼接字符串
  let binString = ""
  while (!stack.isEmpty()) {
    binString += stack.pop()
  }
  return binString
}
