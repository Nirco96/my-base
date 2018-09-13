export class Facility {
  public name : string;
  public icon : string;
  public bgcolor : string;
  public description : string;
  public openingHours : any
  public services : any;

  constructor(name: string, icon: string, bgcolor: string, description: string, openingHours : any, services : any) {
    this.name = name;
    this.icon = icon;
    this.bgcolor = bgcolor;
    this.description = description;
  }

  static fromJson(json : any) {
    return new Facility(json.name, json.icon, json.bgcolor, json.description, json.openinghours, json.services);
  }
}
