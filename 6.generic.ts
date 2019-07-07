function getFirstElem<T>(arr: string[]): void {
    /* 함수 본문 */
    console.log(arr);
};

const languages: string[] = ['TypeScript', 'JavaScript'];
const language = getFirstElem<string>(languages); // 이 때 language의 타입은 문자열

type MyArray<T> = T[];
const drinks: MyArray<string> = ['Coffee', 'Milk', 'Beer'];

