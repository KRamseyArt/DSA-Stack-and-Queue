const Stack = require('./stack');

class StackQueue extends Stack {
  constructor(){
    super();
    this.first = this.top;
    this.last = null;
  }

  enqueue(data){
    if (this.first === null){
      this.push(data);
      this.last = this.top;
    } else {
      const tempStack = new Stack();
      while (this.top) {
        tempStack.push(this.pop());
      }

      tempStack.push(data);

      while (tempStack.top){
        this.push(tempStack.pop());
      }

      let currNode = this.top;
      while (currNode.next !== null){
        currNode = currNode.next;
      }
      this.last = currNode;
    }
    this.first = this.top;
  }

  dequeue(){
    this.pop();
    this.first = this.top;
  }
}

module.exports = StackQueue;