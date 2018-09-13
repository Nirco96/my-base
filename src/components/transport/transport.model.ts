export class Transport {
  private _arrivalTime : Date;
  private _stations : Array<string>;

  public Transport (arrivalTime : Date, stations: Array<string>) {
    this._arrivalTime = arrivalTime;
    this._stations = stations;
  }
}
