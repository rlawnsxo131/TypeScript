/* abstract class */
abstract class Animal6 {
    abstract makeSound(): void;
    move(): void {
        console.log("roaming the earth...");
    }
}

abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log("Department name: " + this.name);
    }

    abstract printMeeting(): void; // 파생된 클래스에서 구현해야 합니다.
}

class AccountingDepartment extends Department {

    constructor() {
        super("Accounting and Auditing"); // 파생된 클래스의 생성자는 super()를 호출해야합니다.
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}

let department: Department; // 좋아요: abstract 타입에 대한 참조를 만듭니다.
department = new Department(); // 오류: 추상 클래스의 인스턴스를 생성할 수 없습니다.
department = new AccountingDepartment(); // 좋아요: 추상적이지 않은 하위 클래스를 생성하고 할당합니다.
department.printName();
department.printMeeting();
department.generateReports(); // 오류: abstract 타입으로 선언된 메서드가 존재하지 않습니다.