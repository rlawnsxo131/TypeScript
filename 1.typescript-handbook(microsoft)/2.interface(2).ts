/**
 * class 타입
 */
interface ClockInterface1 {
    currentTime: Date;
    setTime(d: Date): any;
}

class Clock1 implements ClockInterface1 {
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


