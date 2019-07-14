function square1(value: number, returnOnString: boolean = false): string | number {
    const mySquare = value * value;
    if(returnOnString) {
        return mySquare.toString();
    }
    return mySquare;
}
const stringOrNumber: string | number = square1(2, true);

// 타입 별칭 사용
type SquaredType = string | number;
function square2(value: number, returnOnString: boolean = false): SquaredType {
    const mySquare = value * value;
    if(returnOnString) {
        return mySquare.toString();
    }
    return mySquare;
}

// 유니온 타입으로 여러개의 타입을 이어가며 정의
type Whatever = number | string | boolean;

// 타입을 줄줄이 정의할 때
type Apple = string;
type Banana = string;
type Cherry = string;

type Fruits1 = Apple | Banana | Cherry;
type Fruits2
    = Apple
    | Banana
    | Cherry;
type Fruits3 = 
    | Apple
    | Banana
    | Cherry;

  