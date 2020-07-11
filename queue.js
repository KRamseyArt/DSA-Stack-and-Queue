class _Node {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}
// 6) Create a queue using Singly linked list
class _Queue {
  constructor(){
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    console.log(`\nENQUEUE:`)

    const node = new _Node(data);

    if (this.first === null){
      console.log(`\t\tStack is empty - ${data} queued to stack`)
      this.first = node;
    }
    if (this.last){
      this.last.next = node;
    }
    console.log(`\t\t${data} queued into stack`)
    this.last = node;
  }
  dequeue(){
    console.log(`\nDEQUEUE:`)

    if (this.first === null){
      console.log(`\t\tStack is empty`)
      return null;
    }
    const node = this.first;
    this.first = this.first.next;

    if (node === this.last){
      console.log(`\t\tLast item in stack removed. Stack is now empty`);
      this.last = null;
    }
    console.log(`\t\t${node.value} dequeued from stack`)
    return node.value;
  }
}


// -------- HELPER FUNCTIONS -------
// 6b) implement a peek function
const peek = q => {
  console.log(`\nPEEK:`)

  if (isEmpty(q)){
    return null;
  }

  console.log(`\t\t1st item in queue is ${q.first}`);
  return q.first;
}

// 6c) implement an isEmpty function
const isEmpty = q => {
  if (!q.first){
    console.log(`\t\tProvided Queue is empty`);
    return true;
  } else {
    console.log(`\t\tProvided Queue is not empty`);
    return false;
  }
}

// 6d) implement a display function
const display = q => {
  console.log(`\nDISPLAY`);

  if (isEmpty(q)){
    return null;
  }
  
  let currNode = q.first;
  while (currNode.next){
    if (currNode.next !== null){
      console.log(`\t\t> ${currNode.value}`);
      currNode = currNode.next;
    }
    console.log(`\t\t> ${currNode.value}`);
  }
}

const squareDance = dancers =>{
  const cowboys = new _Queue();
  const cowgirls = new _Queue();

  dancers.forEach(dancer => {
    if(dancer[0] === 'F'){
      cowgirls.enqueue(dancer)
    } else {
      cowboys.enqueue(dancer)
    }
  })
  console.log(`\nGrab your partners!`);

  while (cowgirls.first && cowboys.first){
    let dancerM = cowboys.dequeue();
    let dancerF = cowgirls.dequeue();
    console.log(`Female: ${dancerF}\nMale: ${dancerM}`)
  }

  console.log(`\nWaiting to dance:`);

  if (!isEmpty(cowgirls)){
    let currNode = cowgirls.first;

    while (currNode){
      console.log(currNode.value);
      currNode = currNode.next;
    }
  }
  if (!isEmpty(cowboys)){
    let currNode = cowboys.first;

    while (currNode){
      console.log(currNode.value);
      currNode = currNode.next;
    }
  }
}

const ophidianBank = queue =>{
  if (isEmpty(queue)){
    return null;
  }
  while (queue.first){
    let customer = queue.dequeue();
    let rand = Math.random();
    if (rand < .25){
      console.log(`${customer} brought the wrong paperwork... Back of the line!`)
      queue.enqueue(customer);
    } else {
      console.log(`Everything seems to be in order. ${customer} assisted successfully.`)
    }
  }
}

function main(){
  // 6a) Create a queue called starTrekQ and add values:
    const starTrekQ = new _Queue();

    let addValues = [
      "Kirk",
      "Spock",
      "Uhura",
      "Sulu",
      "Checkov"
    ];

    addValues.forEach(v => {
      starTrekQ.enqueue(v);
    })

  // 6e) Remove Spock from the Queue and display the result
    starTrekQ.dequeue();
    starTrekQ.dequeue();
    
    display(starTrekQ);

  // 9) Square Dance Pairing
    const testGroup = [
      'F Jane',
      'M Frank',
      'M John',
      'M Sherlock',
      'F Madonna',
      'M David',
      'M Christopher',
      'F Beyonce'
    ]

    squareDance(testGroup);
  
  // 10) Ophidian Bank
    const ophidianCustomers = new _Queue();

    addValues.forEach(v => {
      ophidianCustomers.enqueue(v);
    })

    ophidianBank(ophidianCustomers);
}

main();

