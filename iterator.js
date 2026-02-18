const iterator = {
    number: 0,
    next() {
        return {
            value: this.number++,
            done: this.number > 4,
        };
    }
}; 
const n1 = iterator.next().value;
const n2 = iterator.next().value;
const n3 = iterator.next().value;
const n4 = iterator.next().value;
console.log({n1, n2, n3, n4});
