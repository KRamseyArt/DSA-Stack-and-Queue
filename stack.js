class _Node {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}

// 1) Create a Stack Class
class _Stack {
  constructor() {
    this.top = null;
  }

  isEmpty() {
    if (this.top === null){
      console.log('Stack is empty')
      return true;
    }
    return false;
  }
  push(value){
    console.log(`\nPUSH:`);
    if (this.isEmpty()){
      this.top = new _Node(value, null);

      console.log(`Stack started with new value, ${value}`)
      return this.top;
    }
    const newNode = new _Node(value, this.top);

    console.log(`${value} added to top of stack`)
    this.top = newNode;
  }

  pop(){
    console.log('\nPOP:')
    if (this.isEmpty()){
      return null;
    }
    const topNode = this.top;
    this.top = topNode.next;

    console.log(`${topNode.value} removed from top of stack`)
    return topNode.value;
  }

  peek() {
    console.log('\nPEEK:')
    if (this.isEmpty()){
      return null;
    }
    console.log(`Top value on stack is ${this.top.value}`);
    return this.top.value;
  }

  display(){
    console.log('\nDISPLAY:')
    if (this.isEmpty()){
      return null;
    }

    let currNode = this.top;

    while (currNode.next !== null){
      console.log(currNode.value);
      currNode = currNode.next;
    }
    console.log(currNode.value);
  }

  sort(){
    if (this.isEmpty()){
      return null;
    }
    console.log(`\nSORT:`)

    if (this.top.next === null){
      console.log('Only one value in the stack')
      return this.top.value;
    }

    const tempStack = new _Stack();
    let low = this.top.value;
    let high = this.top.value;
    let currNode = this.top;

    while (currNode.next !== null){
      if (currNode.value > high){
        high = currNode.value;
      }
      if (currNode.value < low){
        low = currNode.value;
      }
      currNode = currNode.next;
    }
    if (currNode.value > high){
      high = currNode.value;
    }
    if (currNode.value < low){
      low = currNode.value;
    }

    tempStack.push(high);

    while (tempStack.top.value !== low){
      let currNode = this.top;
      let tempHigh = low;

      while (currNode.next !== null){
        if (currNode.value > tempHigh && currNode.value < tempStack.top.value){
          tempHigh = currNode.value;
        }
        currNode = currNode.next;
      }
      if (currNode.value > tempHigh && currNode.value < tempStack.top.value){
        tempHigh = currNode.value;
      }
      tempStack.push(tempHigh);
    }
    console.log(`\nSort results:`)
    tempStack.display();
    return tempStack;
  }
}

function main(){
  /*
    1a) Create a stack called 'starTrek' and add
      'Kirk', 'Spock', 'McCoy', and 'Scotty'
  */
  const starTrek = new _Stack();

  let addValues = [
    "Kirk",
    "Spock",
    "McCoy",
    "Scotty",
  ]

  addValues.forEach(v => {
    starTrek.push(v);
  })

  // 2) Implement the following helper functions outside of the class:
    // 2a) Peek -look at top of stack without removing it
    starTrek.peek(); 
    // 2b) isEmpty - check if stack is empty or not
    starTrek.isEmpty(); 
    // 2c) display - display the whole stack
    starTrek.display(); // first item in your stack? = 'Kirk'
    // 2d) remove McCoy from stack and display the stack
    starTrek.pop();
    starTrek.pop(); // remove 'Scotty' + 'McCoy'
    starTrek.display();

  // 3) Check for palindromes using a stack
  console.log(is_palindrome("dad"));
  console.log(is_palindrome("A man, a plan, a canal: Panama"));
  console.log(is_palindrome("1001"));
  console.log(is_palindrome("Tauhida"));

  // 4) Matching Parentheses in an expression
  console.log(parenthesesMatch("1 + (2 * 3)"));
  console.log(parenthesesMatch("1 + (2 * (3 + 4)"));

  // 5) Sort Stack
  const sortTestStack = new _Stack();
  
  addValues = [
    3,
    5,
    1,
    7,
    9,
  ]
  addValues.forEach(v => {
    sortTestStack.push(v);
  })
  sortTestStack.display();
  sortTestStack.sort();  
}


function is_palindrome(s) {
  if (!s){
    return null;
  }
  
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  
  console.log(`\nIS PALINDROME? '${s}'`)
  
  if (s.length <= 1){
    console.log('Single character cannot be determined')
    return false;
  }
  const palindromeStack = new _Stack();

  for (let i = 0; i <= Math.floor(s.length/2); i++){
    palindromeStack.push(s[i])
  }
  for (let i = Math.floor(s.length/2); i < s.length-1; i++){
    const comp = palindromeStack.pop();
    if (s[i] !== comp){
      console.log(`${s[i]} does not match ${comp}`)
      return false;
    }
  }
  console.log(`Exact palindrome match`)
  return true;
}

function parenthesesMatch(s){
  if (!s){
    return null;
  }

  console.log(`\nPARNETHESES MATCH? '${s}'`);

  const parenthesesStack = new _Stack();

  for (let i = 0; i < s.length; i++){
    if (s[i] === '('){
      parenthesesStack.push(s[i]);
    }
    if (s[i] === ')'){
      if (parenthesesStack.isEmpty()){
        console.log('You are missing "("');
        return false;
      }
      parenthesesStack.pop();
    }
  }
  if (!parenthesesStack.isEmpty()){
    console.log('You are missing a ")"');
    return false;
  }
  console.log(`TRUE: All parentheses open and close correctly`)
  return true;
}


main();