// let numbers=[12,3213,44,4224,24];
// console.log(numbers)

// let number1=new Array('Ab','ac','ad',234);
// console.log(number1[1]);
// number1[1]='ae';
// console.log(number1[1]);
// number1.push(123);
// console.log(number1)
// number1.pop()
// console.log(number1)
// console.log( number1.length);

//********Array methods ***********/

let days=new Array('sun','mon','tue','wed')
console.log(days)
days.push('thu');//add element to last
console.log(days);
days.pop()//remove last element
console.log(days);
days.shift()//remove first element
console.log(days);
days.unshift("Sun")//add element at first
console.log(days);
delete days[2]//delete 3rd element but position still there
console.log(days);
days[2]='Tue';
console.log(days);
days.splice(1,2)//remove 2nd and 3rd element
console.log(days);
days.splice(2,0,'Tue','Mon')
console.log(days);

let DaysWork=days.slice(0,2)
console.log(days);
console.log(DaysWork)
let addDay=['Fri','Sat','Sunday'];
let AllDays=addDay.concat(days)
console.log('All Days '+AllDays)
