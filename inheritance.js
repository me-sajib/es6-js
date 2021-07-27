class Parent {
    constructor() {
        this.fName = "kolimuddin";
    }
    getFullAdd() {
        return this.fName + " " + this.names;
    }
}
class Child extends Parent {
    constructor(age, name) {
        super();
        this.age = age;
        this.names = name
    }
}
const names = new Child(11, "jamir");
console.log(names.getFullAdd());