//encapsulation - restricting direct access to some object components ,bounding data,
//why-security,hiding implementation 

class employee{

    setEmployeeDetails(Name,id,phoneNo){
this.Name=Name;
this.id=id;
this.phoneNo=phoneNo;

    }

    getEmpName(){
        return this.Name;
    }
    getEmpId(){
        return this.id;
    }

    getPhone(){

        return this.phoneNo;
    }
}
let emp=new employee();//create object of class  ref
emp.setEmployeeDetails('Somanath',2142342314,99887777775)//access methods using refrence
emp.setEmployeeDetails('Somnath',12343,98223344)
console.log(emp.getEmpName()); //
console.log(emp.getEmpId())
console.log(emp.getPhone())