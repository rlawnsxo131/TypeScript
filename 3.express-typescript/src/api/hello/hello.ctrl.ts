interface A {
    name: string,
    age: number
}
export const a = (a: A): A => {
    return a;
}

interface B {
    name: string
}