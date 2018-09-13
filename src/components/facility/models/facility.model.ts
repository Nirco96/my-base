import {FacilityOpeninghours} from "./facility-openinghours.model";

export class Facility {
  public name : string;
  public icon : string;
  public bgcolor : string;
  public description : string;
  public openingHours : FacilityOpeninghours;
  public services : any;

  constructor(name: string, icon: string, bgcolor: string, description: string, openingHours : FacilityOpeninghours, services : any) {
    this.name = name;
    this.icon = icon;
    this.bgcolor = bgcolor;
    this.description = description;
    this.openingHours = openingHours
    console.log(services);
  }

  static fromJson(json : any) {
    return new Facility(json.name, json.icon, json.bgcolor, json.description, json.openingHours ? FacilityOpeninghours.fromJson(json.openingHours) : undefined, json.services ? json.services : undefined);
  }

}
