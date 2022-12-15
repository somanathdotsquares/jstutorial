//Every object in JavaScript has a built-in property, which is called its prototype

let setEmpDetails=function(Name,Age,Id){

    this.Name=Name;
    this.Age=Age;
    this.Id=Id;
    // this.getName=function(){
    //     return  this.Name;
    // }
    //  this.getAge=function(){
    //     return  this.Age;
    // }
    // this.getId=function(){
    //     return  this.Id;
    // }


};

setEmpDetails.prototypethis.getName=function(){
    return  this.Name;
};
setEmpDetails.prototypethis.this.getAge=function(){
    return  this.Age;
};
setEmpDetails.prototypethis.this.getId=function(){
    return  this.Id;
};

let emp1=new setEmpDetails('Somanath',21,10022);
console.log(emp1.getAge());
console.log(emp1.getName());
let emp2=new setEmpDetails('Soma',232,10002);
console.log(emp2.getAge());
console.log(emp2.getName());
console.log(emp1.getId());
