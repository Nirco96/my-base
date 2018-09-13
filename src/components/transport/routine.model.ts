export class Routine {
  private _day : number;
  private _arrivalTimes : Array<string>;

  constructor(day: number, arrivalTimes: Array<string>) {
    this._day = day;
    this._arrivalTimes = arrivalTimes;
  }

  get day(): number {
    return this._day;
  }

  set day(value: number) {
    this._day = value;
  }

  get arrivalTimes(): Array<string> {
    return this._arrivalTimes;
  }

  set arrivalTimes(value: Array<string>) {
    this._arrivalTimes = value;
  }

}
