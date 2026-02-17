//Simple generator
function* daysOfTheWeek() {
yield 'Sunday';
yield 'Monday';
yield 'Tuesday';
yield 'Wednesday';
yield 'Thursday';
yield 'Friday';
yield 'Saturday';
}

const day = daysOfTheWeek();
console.log(day.next().value);
console.log(day.next().value);
console.log(day.next().value);
console.log(day.next().value);
console.log(day.next().value);
console.log(day.next().value);
console.log(day.next().value);
console.log(day.next().done);
