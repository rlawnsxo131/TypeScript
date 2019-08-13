/* boolean */
let isDone: boolean = false;

/* number */
let decimal: number = 6; // 6
let hex: number = 0xf00d; // 61453
let binary: number = 0b1010; // 10
let octal: number = 0o744; // 484

/* string */
let color: string = "blue";
color = 'red';

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence1: string = `Hello, my name is ${ fullName }.I'll be ${ age + 1 } years old next month.`;

let sentence2: string = "Hello, my name is " + fullName + ".\n\n" +
                        "I'll be " + (age + 1) + " years old next month.";

/* Array */
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

/* Tuple */
// 튜플 타입 선언
let x: [string, number];
// 초기화
x = ["hello", 10]; // 좋아요
// 부정확한 초기화
//x = [10, "hello"]; // 오류

console.log(x[0].substr(1)); // 좋아요
//console.log(x[1].substr(1)); // 오류, 'number'은 'substr'을 가지고 있지 않다.

//x[3] = "world"; // 좋아요, 'string'은 'string | number'에 할당될 수 있다.
//console.log(x[5].toString()); // 좋아요, 'string' 및 'number'에 모두 'toString'이 있다.
//x[6] = true; // 오류, 'boolean'은 'string | number' 타입이 아나다.

/* Enum */
enum Color1 {Red, Green, Blue}
let c1: Color1 = Color1.Green;

enum Color2 {Red = 1, Green, Blue}
let c2: Color2 = Color2.Green;

enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];
alert(colorName); // 위의 값이 2 이므로 'Green'을 표시한다.

/* Any */
let notSure: any = 4;
notSure = "문자열일수도 있다";
notSure = false; // 좋아요, 확실한 boolean

notSure.ifItExists(); // 좋아요, 런타임에 ifItExists가 존재할 수 있다.
notSure.toFixed(); // 좋아요, toFixed는 존재한다. (그러나 컴파일러는 체크하지 않는다)

let prettySure: Object = 4;
//prettySure.toFixed(); // 오류: 'Object' 타입에 'toFixed' 프로퍼티는 존재하지 않는다.

let list: any[] = [1, true, "free"];
list[1] = 100;

/* Void */
function warnUser(): void {
    alert("This is my warning message");
}
let unusable: void = undefined;

/* Undefined && Null */
// 그 외에도 이러한 변수에 할당할 수 있다!
let u: undefined = undefined;
let n: null = null;

/* Never */
// 반환되는 함수에는 연결할 수 없는 end-point가 있어서는 안 된다.
function error(message: string): never {
    throw new Error(message); // return 이란 단어조차 허용 안됨
}

// 추론되는 반환 타입은 절대로 없다.
function fail(): never {
    return error("Something failed");
}

// 반환되는 함수에는 연결할 수 없는 end-point가 있어서는 안 된다.
function infiniteLoop(): never {
    while (true) {
    }
}

/* 타입 단언(Type assertions) */
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length; // 괄호 빼면 에러
