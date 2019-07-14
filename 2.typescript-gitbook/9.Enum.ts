/* 숫자 */
// 아래 두 경우는 같다 == 0, 1, 2, 3
enum Direction {
  East,
  West,
  South,
  North
};
enum ExplicitDirection {
  East = 0,
  West = 1,
  South = 2,
  North = 3
};

const south: Direction = Direction.South;
console.log(south) // 2

// 멤버값 초기화
enum InitializedDirection {
  East = 2,
  West = 4,
  South = 8,
  North = 16
};
enum InitializedDirection2 {
  East = 3,
  West /* 4 */,
  South = 7,
  North /* 8 */
}

/* 문자 */
enum Direction2 {
  East = 'EAST',
  West = 'WEST',
  South = 'SOUTH',
  North = 'NORTH'
};

/* 계산된 멤버 */
function getAnswer() {
  return 42;
};
enum SpecialNumbers {
  Answer = getAnswer(),
  // 반드시 초기화
  Mystery // error TS1061: Enum member must have initializer.
};

/* const enum */
const enum ConstEnum {
  A,
  B = 2,
  C = B * 2,
  D = -C,
}
console.log(ConstEnum.A); // console.log(0 /* A */)

/* 유니온 열거(union enum) */
enum ShapeKind {
  Circle,
  Triangle = 3,
  Square
}

type Circle = {
  kind: ShapeKind.Circle;
  radius: number;
}
type Triangle = {
  kind: ShapeKind.Triangle;
  maxAngle: number;
}
type Square = {
  kind: ShapeKind.Square;
  maxLength: number;
}
type Shape = Circle | Triangle | Square;

type Direction3 = 'EAST' | 'WEST' | 'SOUTH' | 'NORTH';
const east: Direction3 = 'EAST';
const center: Direction3 = 'CENTER'; // error TS2322: Type '"CENTER"' is not assignable to type 'Direction'.

  