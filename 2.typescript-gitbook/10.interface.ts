// readonly 속성은 수정이 불가능한다.
interface User1{
  name: string;
  readonly height: number;
  favoriteLanguage?: string;
};
const juntae: User1 = { name: '김준태', height: 169 }; // ok
//juntae.height = 180 // error TS2540: Cannot assign to 'height' because it is a constant or a read-only property.


// 함수 인터페이스 작성
interface GetUserName {
  (user: User1): string;
}

const getUserName1: GetUserName = (user) => {
    return user.name;
};

const getUserName2: GetUserName = (u) => {
    return u.name;
};


// 하이브리드 타입
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}
function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function() { };
    return counter;
}
let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

// 제네릭 인터페이스

