/* 명시적인 this 매개변수 제공 */
function f(this: void) {
    // 이 분리된 함수에서 'this'를 사용할 수 없는지 확인해보세요.
    console.log(this); 
    /*  결과
        Object [global] {
            global: [Circular],
            clearInterval: [Function: clearInterval],
            clearTimeout: [Function: clearTimeout],
            setInterval: [Function: setInterval],
            setTimeout: [Function: setTimeout] { [Symbol(util.promisify.custom)]: [Function] },
            queueMicrotask: [Function: queueMicrotask],
            clearImmediate: [Function: clearImmediate],
            setImmediate: [Function: setImmediate] {
              [Symbol(util.promisify.custom)]: [Function]
            }
        }
     */
}


interface Card {
  suit: string;
  card: number;
}
interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}
let myDeck: Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  // 주의사항 : 이 함수는 이제 반드시 Deck 타입이어야합니다
  createCardPicker: function(this: Deck) {
      return () => {
          let pickedCard = Math.floor(Math.random() * 52);
          let pickedSuit = Math.floor(pickedCard / 13);

          return {suit: this.suits[pickedSuit], card: pickedCard % 13};
      }
  }
}

let myCardPicker = deck.createCardPicker();
let myPickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);

/* 콜백에서의 this */

interface UIElement {
  addClickListener(onclick: (this: void, e: Event) => void): void;
}

class Handler {
  info: string;
  onClickBad(this: Handler, e: Event) {
      // 이런, 여기서 this를 사용했어요. 이 콜백을 사용하면 충돌으로 런타임 오류가 발생합니다.
      this.info = e.message;
  }
}
let h = new Handler();
uiElement.addClickListener(h.onClickBad); // 오류!

//
class Handler1 {
  info: string;
  onClickGood(this: void, e: Event) {
      // this의 타입이 void이기 때문에 여기서는 사용할 수 없습니다!
      console.log('clicked!');
  }
}
let h1 = new Handler1();
uiElement.addClickListener(h1.onClickGood);

//
class Handler2 {
  info: string;
  onClickGood = (e: Event) => { this.info = e.message }
}
