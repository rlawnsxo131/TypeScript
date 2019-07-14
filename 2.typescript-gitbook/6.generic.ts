function getFirstElem<T>(arr: string[]): void {
    /* 함수 본문 */
    console.log(arr);
};

const languages: string[] = ['TypeScript', 'JavaScript'];
const language = getFirstElem<string>(languages); // 이 때 language의 타입은 문자열

type MyArray<T> = T[];
const drinks: MyArray<string> = ['Coffee', 'Milk', 'Beer'];

////////////////////////////////////////////////////////////////////


type A<T> = T[];

const a = (name: string): A<string> => {
    return [name]
}

const b = <T>(arr: T[]): T => {
    const b: T[] = arr.sort((a: T, b: T) => {
        return Number(a) - Number(b);
    });
    return b[0];
}

function test<T>(arr: T[]): T {
    const c: T[] = arr.sort((a: T, b: T) => {
        return Number(a) - Number(b);
    });
    return c[0];
}

b<string>(['1', '2', '3', '4']);
test<number>([1, 2, 3, 4]);