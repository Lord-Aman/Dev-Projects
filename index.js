class Person{
    constructor(name,age){
        this.name = name;
        this.age = age
    }

    walk(){
        console.log("walk");
    }
}

class Teacher extends Person{
    constructor(name,age,degree){
        super(name,age) //It is used to pass paramters to a Parent Class
        this.degree= degree
    }

    teach(){
        console.log("teach");
    }
}

const teacher = new Teacher('theia',31,'MSc');
console.log(teacher) 