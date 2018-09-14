export class Station {
  private _name : string;
  private _id : number;
  private _delta : number;

  constructor(delta : number, id : number, name : string) {
    this._name = name;
    this._id = id;
    this._delta = delta;
  }

  static fromJson(json : any) {
    return new Station(json.delta, json.id, json.name);
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get delta(): number {
    return this._delta;
  }

  set delta(value: number) {
    this._delta = value;
  }
}
