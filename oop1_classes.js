class myClass1{
    // constructor(fname,id){
    //     this.fname=fname
    //     this.id=id
    // }

    setDetails(fname,id){
        this.fname=fname
        this.id=id

    }
}

// let obj=new myClass('Somanath',1022);
let obj=new myClass1();
obj.setDetails('somanath',95)
console.log(obj.fname)
console.log(obj.id)

class myClass2{
    constructor(fname,id){
        this.fname=fname
        this.id=id
    }

    // setDetails(fname,id){
    //     this.fname=fname
    //     this.id=id

    // }
}

 let obj1=new myClass2('Somanath',1022);
// let obj=new myClass1();
// obj.setDetails('somanath',95)
console.log(obj1.fname)
console.log(obj1.id)