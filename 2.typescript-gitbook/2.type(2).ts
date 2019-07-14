// any: 모든타입과 호환
let bool: any = true;
bool = 3;
bool = {};
bool = 'any';

// void: null && undefined(아무것도 반환하지 않는 함수의 반환타입 표시)
function nothing(): void { }

// never: 절대 존해할 수 없는 값을 암시한다
function alwaysThrow(): never {
  throw new Error('항상 에러를 쓰로우하기때문에 아무런 값도 반환하지 않는다.')
}

// Array
const pibonacciOne: number[] = [0, 1, 1, 2, 3, 5, 8];
const fruitOne: string[] = ['apple', 'banana', 'pich'];

const pibonacciTwo: Array<number> = [0, 1, 1, 2, 3, 5, 8];
const fruitTwo: Array<string> = ['apple', 'banana', 'pich'];

// tuple: 원소의 수와 각 원소 타입이 정확히 지정된 배열의 타입을 저장할 수 있다.
//        타입 정의보다 더 많은, 혹은 더 적은 원소를 갖는 배열을 할당한다면 에러를 낸다.
// 주의: Array의 프로토타입 메서드로 조작하면 에러가 안난다.
const nameAndAge: [string, number] = ['김준태', 29];
nameAndAge.push(100);
