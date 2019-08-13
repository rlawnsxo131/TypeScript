/**
 * interface에 명시된 Property에 해당하는 타입이 있다면, 다른 Property가 있건, 순서가 어떻건 상관이 없다.
 */
interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj);
}

const myObj = { size: 10, label: 'Size 10 Object'};
printLabel(myObj);


/**
 * ?: 선택적 프로퍼티. 조건에 충족한 값이 있을 시 값을 전달한다. 단, interface에 명시되지 않은 값이 있을 경우 오류를 발생
 */
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config:SquareConfig): { color: string; area: number} {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        // newSquare.color = config.clor; 오류 : 'SquareConfig' 타입에 'clor'프로퍼티가 존재하지 않습니다.
        newSquare.color = config.color;
    }
    if(config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

const mySquare1 = createSquare({ color: "black" });


/**
 * readonly: 명시하면 값을 바꿀 수 없다. 재할당 불가.
 */
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
p1.x = 5; // 오류!

// ReadonlyArray
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // 오류!
ro.push(5); // 오류!
ro.length = 100; // 오류!
a = ro; // 오류!

a = ro as number[]; // 타입 단언을 통해 오버라이드는 가능하다


/**
 * 프로퍼티 초과 검사(Access Property Checkes)
 * : 타입 단언을 사용해 해당 interface에 alias를 붙인다.
 * : 아래처럼 문자열 인덱스 시그처를(string index signature) 붙인다.
 */
let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

/**
 * 함수 타입(function types)
 */
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = (source: string, subString: string) => {
    const result = source.search(subString);
    return result > -1;
};

// 함수 타입을 검사할 때 매개 변수의 이름이 일치할 필요는 없다.
let mySearch2: SearchFunc;
mySearch2 = (src: string, sub: string) => {
    let result = src.search(sub);
    return result > -1;
};

let mySearch3: SearchFunc;
mySearch3 = function(src, sub) {
  let result = src.search(sub);
  return result > -1;
};


/**
 * 인덱싱 가능 타입(Indexable Types)
 */
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ['Bob', 'Fred'];

let myStr: string = myArray[0];

class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}
class Dog extends Animal {
    breed: string;
    constructor(breed: string) {
        super(name);
        this.breed = breed;
    }
}
// 오류: numeric과 string으로 인덱싱하면 완전히 다른 타입의 Animal을 얻을 수 있습니다!
// 오류: 숫자 인덱스 형식 'Animal'을(를) 문자열 인덱스 형식 'Dog'에 할당할 수 없습니다.ts(2413)
interface NotOkay {
    [x: number]: Animal;
    [x: string]: Dog;
}

interface NumberDictionary {
    [index: string]: number;
    length: number; // 좋아요, length는 number입니다.
    name: string; // 오류, 'name'의 타입이 인덱서의 하위 타입이 아닙니다.
}

//인덱스에 할당되지 않도록 인덱스 시그니처(index signatures)을 읽기 전용(readonly)으로 만들 수 있다:
interface ReadonlyStringArray {
    readonly [index: number]: string;
  }
let myArray4: ReadonlyStringArray = ["Alice", "Bob"];
myArray4[2] = "Mallory"; // 오류!
