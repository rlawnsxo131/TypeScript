// object

// 콜론(:)우변에는 값대신 속성의 타입이 들어간다.
// 구분자로 콤마(,)와 콜론(;) 을 사용 가능하다.
const user: { name: string; age: number; } = { name: '김준태', age: 29 };

// 선택속성(?): 값이 있을수도 없을 수도 있다.
const jun: { name: string, age?: number } = { name: 'john' };

// 읽기전용(readonly): 해당 속성의 재할당을 막는다.(const와 비슷하게 동작)
const john: {
  readonly name: string,
  age: number;
} = { name: 'john', age: 29 }