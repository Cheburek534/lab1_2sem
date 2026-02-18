//simple iterator
const iter = {
[Symbol.iterator]() {    
const iterator = {
    number: 0,
    next() {
        return {
            value: this.number++,
            done: this.number > 4,
        };
      }
   }; 
   return iterator;
  } 
}
const iterator = iter[Symbol.iterator]();
const n1 = iterator.next().value;
const n2 = iterator.next().value;
const n3 = iterator.next().value;
const n4 = iterator.next().value;
console.log({n1, n2, n3, n4});

for(const nums of iter);
console.log({nums: [...iter]});

//Main iterator
console.log("Iterator:");

function rangeNum(start, end) {
let now = start;
return {
    next() {
        if(now <= end) {
            return {
                value: now++,
                done: false
            };
        }
        else {
            return {
                value: undefined,
                done: true 
            };
        }
     }
   };
}

const toFrom = rangeNum(0, 2);
console.log(toFrom.next());
console.log(toFrom.next());
console.log(toFrom.next());
console.log(toFrom.next());

//Iterator from lab 
const Animals = {
    animals: ["Monkey", "Dog", "Zebra", "Alligator", "Hornet"],
    [Symbol.iterator]() {
        let order = 0;
        return {
        next() { 
         if(order <= this.animal.length) {
            return {value: this.animals[order++], done: false};
         }
         else { return{value: undefined, done: true}};
        } 
    }; 
  }
}