import {FacilityRoutine} from "./facility-routine.model";

export class FacilityOpeninghours {
  public routine : FacilityRoutine[];
  public exceptions : any[];

  constructor(routine : FacilityRoutine[], exceptions : any) {
    this.routine = routine;
    this.exceptions = exceptions;
  }

  static fromJson(json : any) {
    return new FacilityOpeninghours(FacilityRoutine.fromJsonArray(json.routine), json.exceptions);
  }
}
