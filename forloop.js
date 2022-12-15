let i;
for (i = 0; i < 5; i++) {
    console.log("i="+i)
}

let day=['sun','mon','tue','fri','thu','sat']
let x;
for (x in day) {
    
        console.log(x,day[x]);
        
    
}
for (x of day) {
    console.log(x);
}