/* public */
class Animal3 {
    public name: string;
    public constructor(theName: string) { this.name = theName; }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

/* private */
class Animal4 {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

new Animal("Cat").name; // 오류: 'name'은 private이다;



class Animal5 {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal5 {
    constructor() { super("Rhino"); }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal5("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
animal = employee; // 오류: 'Animal'과 'Employee'는 호환되지 않습니다.



/* protected */
/* 보호된 속성이며 하위클래스에서만 엑세스 가능하다 */
class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee1 extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee1("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // 메소드 내부에서 값으론 사용 가능하지만 protected 속성이기 때문에 접근은 불가능 하다

// protected 생성자
class Person2 {
    protected name: string;
    protected constructor(theName: string) { this.name = theName; }
}

// Employee는 Person을 확장할 수 있습니다
class Employee2 extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard2 = new Employee2("Howard", "Sales");
let john = new Person("John"); // 오류: 'Person'의 생성자는 protected입니다.
