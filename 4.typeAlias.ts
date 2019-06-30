type UUID = string;
type age = number;
type AnotherUUID = UUID;
type Animals = Array<string>
type User = {
  name: string;
  age: number;
};

// 별칭은 단순히 별칭을 붙이고, 타입자체는 변하지 않는다.
// 아래의 경우 UUID는 string을 의미한다.
// string타입을 받아 string타입을 반환하는 함수
function getUUID(uuid: UUID): UUID {
  return uuid;
}



