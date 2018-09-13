import { NgModule } from '@angular/core';
import { FacilityComponent } from './facility/facility';
import {IonicModule} from "ionic-angular";
import {TransportsManagerComponent} from "./transports-manager/transports-manager";
import {TransportComponent} from "./transport/transport";
@NgModule({
	imports: [IonicModule],
	declarations: [FacilityComponent,
    TransportsManagerComponent,
    TransportComponent],
	exports: [FacilityComponent,
    TransportsManagerComponent,
    TransportComponent]
})
export class ComponentsModule {}
