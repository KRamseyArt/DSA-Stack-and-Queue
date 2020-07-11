class _Node {
  constructor (value, prev){
    this.value = value;
    this.prev = prev;
    this.next = null;
  }
}

class _DoubleQueue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data){
    console.log(`\nENQUEUE`);
    const newNode = new _Node(data, this.last);

    if (this.first === null){
      console.log(`\t\t${data} added as first value in queue`)
      this.first = newNode;
    }
    if (this.last) {
      this.last.next = newNode;
    }
    console.log(`\t\t${data} added to queue`)
    this.last = newNode;
  }

  dequeue() {
    console.log(`\nDEQUEUE:`)
    if (!this.first){
      return null;
    }
    const firstNode = this.first;

    if (firstNode.next === null){
      this.last = null;
    } else {
      firstNode.next.prev = null;
    }

    this.first = firstNode.next;
    console.log(`\t\t${firstNode.value} removed from queue`)
    return firstNode.value;
  }
}