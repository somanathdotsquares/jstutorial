//inheretance-access properties(methods,variables) from one class to other
//parent->child   , base class->derived class, Super class->sub class

class Car{

    setName(Name){
        this.Name=Name
    }

    startEngine(){
        console.log('Engine started for '+this.Name)
    }
    
    stopEngine(){
        console.log('Engine stopped for '+this.Name)
    }
}
class Tata extends Car{

maxSpeed(speed){
    console.log('Maximum sppe for car '+this.Name+' is '+speed+' kmph')
}
}

let myCar=new Tata();

myCar.setName('Nexon')
myCar.startEngine()
myCar.stopEngine()
myCar.maxSpeed(120)