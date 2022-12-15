//abstraction- hiding implementation detail and showing functionlity

function employee(Name, Age, baseSalary) {

    this.Name = Name;
    this.Age = Age;
    this.baseSalary=baseSalary;
    let allowance = 5000;

    // getEmpDetails(){
    //     console.log('Name : ' + this.Name + 'Age: ' + this.Age + 'And salary is: ' + this.salary);
    // }

    this.getEmpDetails = function () {
        console.log('Name: ' + this.Name + ' Age:' + this.Age)
        finalSalary();
    }

    let finalSalary = function () {
        let finalPay = baseSalary + allowance;
        console.log('Final salary is: ' + finalPay);
    }
}
let obj = new employee('Somanath', 23, 21343);
obj.getEmpDetails();
//obj.finalSalary();
//change1