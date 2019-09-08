/* 나머지 매개변수(Rest Parameter) */

function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

// ...이 있는 함수의 타입에도 적용된다
function buildName1(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let buildNameFun: (fname: string, ...rest: string[]) => string = buildName1;


/* this */
// not use arrow functions
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        return function() {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker(); // 여기서의 this는 window(자기자신을 호출)
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit); // 에러

// use arrow functions
let deck1 = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        // 주의: 아래 줄은 이제 화살표 함수입니다. 여기에서 'this'를 캡처할 수 있습니다.
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker1 = deck.createCardPicker();
let pickedCard1 = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);