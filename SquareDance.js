const _Queue = require ('./queue');

class SquareDance {
  constructor() {
    this.males = new _Queue();
    this.females = new _Queue();
  }

  pairOff(string){
    const gender = string[0];
    const name = string.split(' ')[1];

    if (gender === 'F'){
      this.females.enqueue(name);
    }
    if (gender === 'M'){
      this.males.enqueue(name);
    }

    console.log(`\nGrab your partners!`);

    if (this.females.first && this.males.first){
      const dancerF = this.females.dequeue();
      const dancerM = this.males.dequeue();
      console.log(`Female: ${dancerF}\nMale: ${dancerM}`)
    }

    console.log(`\nWaiting to dance:`);

    if (this.females.first){
      let count = 1;
      let currNode = this.females.first;

      while (currNode.next !== null){
        count++;
        currNode = currNode.next;
      }
      console.log(`Females: ${count}`);
    }
    if (this.males.first){
      let count = 1;
      let currNode = this.males.first;

      while (currNode.next !== null){
        count++;
        currNode = currNode.next;
      }
      console.log(`Males: ${count}`);
    }
  }
}

function main(){
  const squareDance = new SquareDance();

  const testGroup = [
    'F Jane',
    'M Frank',
    'M John',
    'M Sherlock',
    'F Madonna',
    'M David',
    'F Beyonce'
  ]

  squareDance(testGroup);
}

main();

modules.exports = SquareDance;