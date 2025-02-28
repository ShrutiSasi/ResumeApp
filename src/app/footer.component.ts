import { Component, inject } from "@angular/core";
import { ProfileService } from "./profile.service";

@Component({
    selector: 'app-footer',
    template: `
    <div class="d-flex justify-content-center mt-4">
        <div class="flex-column">    
            <div class="pt-2 d-flex justify-content-center">
                <h4><strong>{{ profile.first_name }} {{ profile.last_name }}</strong></h4> 
            </div>           
            <div class="mb-4 d-flex justify-content-center">
                <i class="bi bi-c-circle"></i> Portfolio. All Rights Reserved.
            </div>
        </div>
    </div>
    `
})
export class FooterComponent{
    profileService = inject(ProfileService);
    profile = this.profileService.profile;
}