import {FacilityHours} from "./facility-hours.model";

export class FacilityRoutine {
  public day : number;
  public hours : FacilityHours[] = [];


  constructor(day: number, hours? : FacilityHours[]) {
    this.day = day;
    this.hours = hours;
  }

  static fromJsonArray(json : any) {
    let retVal : FacilityRoutine[] = [];

    json.forEach((dayInWeek) => {
      let hoursArray : FacilityHours[] = [];
      dayInWeek.hours.forEach((hour) => hoursArray.push(new FacilityHours(hour.from, hour.to)));
      retVal.push(new FacilityRoutine(dayInWeek.day, hoursArray));
    });

    return retVal;
  }
}
