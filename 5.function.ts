// 두 숫자를 받아 그 합을 반환하는 함수
function sum(a: number, b: number): number {
  return a + b;
}

// 함수가 아무런값도 반환하지 않고 종료
//void 반환 타입을 갖는 함수가 undefined나 null 이외의 값을 반환하면 타입 에러가 발생한다.
//void가 아닌 반환 타입을 갖는 함수가 아무 값도 반환하지 않는 경우도 마찬가지.
function logGreetings(name: string): void {
  console.log(`Hello, ${name}!`);
}

// 함수값의 타입표기
const yetAnotherSum: (a: number, b: number) => number = sum;
const onePlusOne: () => number = () => 2;
const arrowSum: (a: number, b: number) => number = (a, b) => (a + b);

type SumFunction = (a: number, b: number) => number; // 타입별칭 사용
const definitelySum: SumFunction = (a, b) => (a + b);

// 기본 매개변수
function greetings(name: string = 'stranger'): void {
  console.log(`Hello, ${name}`);
}
greetings('juntae'); // Hello,juntae!
greetings(); // Hello, stranger!

// 선택 매개변수
function fetchVideo(url: string, subtitleLanguage?: string) {
  const option = { url };

  if (subtitleLanguage) {
    option.subtitleLanguage = true;
  }
  /* ... */
}
fetchVideo('https://example.com', 'ko'); // okay
fetchVideo('https://example.com'); // also okay

// 함수 오버로딩
function double(str: string): string;
function double(num: number): number;
function double(arr: boolean[]): boolean[];

function double(arg: any) {
  if (typeof arg === 'string') {
      return `${arg}${arg}`;
  } else if (typeof arg === 'number') {
      return arg * 2;
  } else if (Array.isArray(arg)) {
      return arg.concat(arg);
  }
}

const num = double(3); // number
const str = double('ab'); // string
const arr = double([true, false]); // boolean[]

// this 타입
interface HTMLElement {
  tagName: string;
  /* ... */
}
interface Handler {
  (this: HTMLElement, event: Event, callback: () => void): void;
}
let cb: any;
// 실제 함수 매개변수에는 this가 나타나지 않음
const onClick: Handler = function(event, cb) {
  // this는 HTMLElement 타입
  console.log(this.tagName);
  cb();
}

interface NoThis {
  (this: void): void;
}
const noThis: NoThis = function() {
  console.log(this.a); // Property 'a' does not exist on type 'void'.
                       // void 형식에 a 속성이 없다는 뜻.
}