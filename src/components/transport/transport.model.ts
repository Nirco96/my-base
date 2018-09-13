import {Station} from "./station.model";
import {Facility} from "../facility/facility.model";
import {Routine} from "./routine.model";

export class Transport {
  private _routine : Array<Routine>;
  private _stations : Array<Station>;

  constructor (routine : Array<Routine>, stations: Array<Station>) {
    this._routine = routine;
    this._stations = stations;
  }

  static fromJson(json : any) : Transport {
    return new Transport(json.routine, json.stations);
  }

  get routine(): Array<Routine> {
    return this._routine;
  }

  set routine(value: Array<Routine>) {
    this._routine = value;
  }

  get stations(): Array<Station> {
    return this._stations;
  }

  set stations(value: Array<Station>) {
    this._stations = value;
  }
}
