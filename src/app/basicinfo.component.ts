import { Component, inject, Input } from "@angular/core";
import { Profile } from "./profile.model";
import { ProfileService } from "./profile.service";
import { JoinWithPipe } from "./joinwithpipe.pipe";

@Component({
    selector: 'app-basicinfo',
    template: `
    <h4 class="pt-3"><strong>{{ title }}</strong></h4>    
    <div class="container">
        <div class="row row-cols-2 gy-3 align-items-center">
            <div class="col"><strong>EMAIL:</strong></div>
            <div class="col">{{ profile.email }}</div>
            <div class="col"><strong>PHONE:</strong></div>
            <div class="col">{{ profile.phone }}</div>
            <div class="col"><strong>ADDRESS:</strong></div>
            <div class="col">{{ profile.address }}</div>
            <div class="col"><strong>LANGUAGES:</strong></div>
            <div class="col">{{ profile.languages | joinWithPipe}}</div>
        </div>      
    </div>
    `,
    imports: [JoinWithPipe]
})
export class BasicInfoComponent {
    //@Input() profile!: Profile;
    title="Basic Information";
    profileService = inject(ProfileService);
    profile = this.profileService.profile;
}