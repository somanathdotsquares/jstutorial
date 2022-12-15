//polymorphism- many forms, method 
class Animal {
    constructor(name) {

        this.name = name;
    }
    drink() {
       
        console.log(this.name + ' drinks water')
    }
}

class Pets extends Animal {
    drink() {
        super.drink();
        console.log(this.name + 'drinks wine')
    }

}

let animal=new Pets('Dog');
animal.drink();
