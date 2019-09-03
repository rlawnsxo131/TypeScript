/* readonly */
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8; // 선언 또는
    constructor (theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs"); // 생성자에서 초기화
//dad.name = "Man with the 3-piece suit"; // 오류! name은 readonly입니다.


/* parameter properties */
class Octopus2 {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {
    }
}


/* Accessors */
let passcode = "secret passcode";

class Employee3 {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        } else {
            console.log("오류 : employee의 무단 업데이트!");
        }
    }
}

let employee2 = new Employee3();
employee2.fullName = "Bob Smith";
if (employee2.fullName) {
    console.log(employee2.fullName);
}


/* static */
class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));