/* 선택적 매개변수 */
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");                  // 올바르게 작동합니다
let result2 = buildName("Bob", "Adams", "Sr.");  // 오류, 너무 많은 매개변수
let result3 = buildName("Bob", "Adams");         // 아, 딱 맞습니다


/* 기본 매개변수 */
function buildName1(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

let result4 = buildName1("Bob");                  // 올바르게 작동하며 "Bob Smith"를 반환합니다
let result5 = buildName1("Bob", undefined);       // 여전히 작동하며 "Bob Smith"를 반환합니다.
let result6 = buildName1("Bob", "Adams", "Sr.");  // 오류, 너무 많은 매개변수
let result7 = buildName1("Bob", "Adams");         // 아, 딱 맞습니다

// 둘은 비슷한 의미
function buildName2(firstName: string, lastName?: string) {
    // ...
}
function buildName3(firstName: string, lastName = "Smith") {
    // ...
}

function buildName4(firstName = "Will", lastName: string) {
    return firstName + " " + lastName;
}

let result8 = buildName4("Bob");                  // 오류, 너무 적은 매개변수
let result9 = buildName4("Bob", "Adams", "Sr.");  // 오류, 너무 많은 매개변수
let result10 = buildName4("Bob", "Adams");         // 좋아요 "Bob Adams"를 반환합니다
let result11 = buildName4(undefined, "Adams");     // 좋아요 "Will Adams"를 반환합니다