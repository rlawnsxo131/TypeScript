/**
 * class 타입
 */
interface ClockInterface1 {
    currentTime: Date;
    setTime(d: Date): any;
}

class Clock implements ClockInterface1 {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
        return this.currentTime;
    }
    constructor() {
        this.currentTime = this.setTime(new Date());
    }
}

// 클래스 스태틱과 인스턴스의 차이점
interface ClockConstructor { // 1
    new (hour: number, minute: number): ClockInterface2;
}
interface ClockInterface2 { // 2
    tick(): void;
}

function createClock(
  ctor: ClockConstructor, // 1
  hour: number,
  minute: number): ClockInterface2 { // 2
      return new ctor(hour, minute);
  }

class DigitalClock implements ClockInterface2 {
    constructor(h: number, m: number) {}
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface2 {
    constructor(h: number, m: number) {}
    tick() {
        console.log("teek teek");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);


/**
 * 인터페이스 확장
 */
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;


/**
 * 하이브리드 타입
 */
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function(start: number) {};
    counter.interval = 123;
    counter.reset = function() {};
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;


/**
 * 인터페이스 확장 클래스
 */
class Control {
    private state: any;
}
  
interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select() {}
}

class TextBox extends Control {
  select() {}
}

// 오류: 'Image' 타입의 'state' 프로퍼티가 없습니다.
// 즉 상속을 받아야 함
class Image implements SelectableControl {
  select() {}
}
  
class Location1 {}