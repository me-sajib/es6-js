class Student{
    constructor(roll, name){
        this.id = roll;
        this.names = name;
        this.school = "palashbari high school";
    }

    getFUllName(){
        return this.names;
    }
}
const stn = new Student(2, "sokir Uddin");
const stn2 = new Student(4, "kader Uddin");
console.log(stn.id);
console.log(stn2);