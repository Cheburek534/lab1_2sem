//Simple generator
function* daysOfTheWeek1() {
yield 'Sunday';
yield 'Monday';
yield 'Tuesday';
yield 'Wednesday';
yield 'Thursday';
yield 'Friday';
yield 'Saturday';
}

const day = daysOfTheWeek1();
console.log(day.next().value);
console.log(day.next().value);
console.log(day.next().value);
console.log(day.next().value);
console.log(day.next().value);
console.log(day.next().value);
console.log(day.next().value);
console.log(day.next().done);

//Generator
console.log("Main generator:");
function* daysOfTheWeek() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
    let sequence = 0;
    while(!sequence.done) {
        yield days[sequence];
        sequence = index + 1;
        if(sequence >= days.length) {
            sequence = 0;
        }
    }
}