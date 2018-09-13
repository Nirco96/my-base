import { NgModule } from '@angular/core';
import { FacilityComponent } from './facility/facility';
import {IonicModule} from "ionic-angular";
@NgModule({
	declarations: [FacilityComponent],
	imports: [IonicModule],
	exports: [FacilityComponent]
})
export class ComponentsModule {}
