import {Station} from "./station.model";

export class Transport {
  private _routine : Array<Date>;
  private _stations : Array<Station>;

  constructor (routine : Array<any>, stations: Array<Station>) {
    routine.forEach(routine => {
      routine.departureTimes.forEach(departureTime => {
        this._routine.push(new Date(routine.day + departureTime));
      })
    });

    this._stations = stations;
  }

  get routine(): Array<Date> {
    return this._routine;
  }

  set routine(value: Array<Date>) {
    this._routine = value;
  }

  get stations(): Array<Station> {
    return this._stations;
  }

  set stations(value: Array<Station>) {
    this._stations = value;
  }
}
