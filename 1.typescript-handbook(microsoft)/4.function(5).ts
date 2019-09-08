let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x): any {
    // 객체 / 배열로 작업하고 있는지 확인해보세요
    // 그렇다면 그것들은 덱을 주고 사용자는 카드를 선택할 것입니다.
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // 그렇지 않으면 카드를 선택하게하세요.
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);



let suits1 = ["hearts", "spades", "clubs", "diamonds"];

function pickCard1(x: {suit: string; card: number; }[]): number;
function pickCard1(x: number): {suit: string; card: number; };
function pickCard1(x): any {
    // 객체 / 배열로 작업하고 있는지 확인해보세요
    // 그렇다면 그것들은 덱을 주고 사용자는 카드를 선택할 것입니다.
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // 그렇지 않으면 카드를 선택하게하세요.
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck1 = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard3 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard4 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);