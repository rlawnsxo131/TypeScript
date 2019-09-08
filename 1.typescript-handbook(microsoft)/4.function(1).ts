// 기명 함수
function add(x, y) {
    return x + y;
}

// 익명 함수
let myAdd = function(x, y) { return x + y; };

let z = 100;

function addToZ(x, y) {
    return x + y + z;
}


// 함수에 간단한 타입넣기
function add1(x: number, y: number): number {
    return x + y;
}

let myAdd1 = function(x: number, y: number): number { return x + y; };

// 함수 타입 작성하기
let myAdd2: (x: number, y: number) => number =
    function(x: number, y: number): number { return x + y; };

let myAdd3: (baseValue: number, increment: number) => number =
    function(x: number, y: number): number { return x + y; };


// 타입 추론
// myAdd는 완벽하게 함수 타입을 가지고 있습니다.
let myAdd4 = function(x: number, y: number): number { return  x + y; };

// 매개변수 'x'와 'y'에는 number 타입이 있습니다.
let myAdd5: (baseValue: number, increment: number) => number =
    function(x, y) { return x + y; };