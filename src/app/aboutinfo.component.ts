import { Component, Input } from "@angular/core";
import { AboutComponent } from "./about.component";
import { BasicInfoComponent } from "./basicinfo.component";
import { Profile } from './profile.model';
import { ExperienceComponent } from "./experience.component";

@Component({
    selector: 'app-aboutinfo',
    template: `
        <div id="about" class="row shadow rounded-2 mt-4">
            <div class="col-md-6 ps-5">
                <app-about></app-about>
            </div>
            <div class="col-md-6 ps-5">
                <app-basicinfo ></app-basicinfo>
            </div>
        </div>
    `,
    imports: [AboutComponent,BasicInfoComponent]
})
export class AboutInfoComponent{
    //@Input() profile!: Profile;

}