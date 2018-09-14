import { NgModule } from '@angular/core';
import { FacilityComponent } from './facility/facility';
import {IonicModule} from "ionic-angular";
import { FacilitiesListComponent } from './facilities-list/facilities-list';
import {FacilitiesProvider} from "../providers/facilities/facilities";
import {TransportsManagerComponent} from "./transports-manager/transports-manager";
import {TransportComponent} from "./transport/transport";
import {MomentModule} from "angular2-moment";
@NgModule({
	declarations: [FacilityComponent,
    FacilitiesListComponent,
    TransportsManagerComponent,
    TransportComponent],
	imports: [IonicModule, MomentModule],
  providers: [FacilitiesProvider],
	exports: [FacilityComponent,
    FacilitiesListComponent,
    TransportsManagerComponent,
    TransportComponent]
})
export class ComponentsModule {}
