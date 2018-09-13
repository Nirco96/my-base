export class Transport {
  private _arrivalTime : Date;
  private _stations : Array<string>;

  constructor (arrivalTime : Date, stations: Array<string>) {
    this._arrivalTime = arrivalTime;
    this._stations = stations;
  }


  get arrivalTime(): Date {
    return this._arrivalTime;
  }

  set arrivalTime(value: Date) {
    this._arrivalTime = value;
  }

  get stations(): Array<string> {
    return this._stations;
  }

  set stations(value: Array<string>) {
    this._stations = value;
  }
}
