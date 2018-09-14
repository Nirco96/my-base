export class TransportRoutine {
  private _day : number;
  private _departureTimes : Array<string>;

  constructor(day: number, arrivalTimes: Array<string>) {
    this._day = day;
    this._departureTimes = arrivalTimes;
  }

  get day(): number {
    return this._day;
  }

  set day(value: number) {
    this._day = value;
  }

  get departureTimes(): Array<string> {
    return this._departureTimes;
  }

  set departureTimes(value: Array<string>) {
    this._departureTimes = value;
  }

}
