export class Station {
  private _name : string;
  private _id : number;
  private _delta : number;

  constructor(name : string, id : number, delta : number) {
    this._name = name;
    this._id = id;
    this._delta = delta;
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
