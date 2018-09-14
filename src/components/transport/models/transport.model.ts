import {Station} from "./station.model";
import {TransportRoutine} from "./transport-routine.model";

export class Transport {
  private _routine : Array<TransportRoutine>;
  private _stations : Array<Station>;

  constructor (routine : Array<TransportRoutine>, stations: Array<Station>) {
    this._routine = routine;
    this._stations = stations;
  }

  static fromJson(json : any) : Transport {
    return new Transport(json.routine, json.stations);
  }

  get routine(): Array<TransportRoutine> {
    return this._routine;
  }

  set routine(value: Array<TransportRoutine>) {
    this._routine = value;
  }

  get stations(): Array<Station> {
    return this._stations;
  }

  set stations(value: Array<Station>) {
    this._stations = value;
  }
}
