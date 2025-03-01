import { Component, inject } from '@angular/core';
import { NavigationComponent } from './navigation.component';
import { DownloadComponent } from "./download.component";
import { ProfileService } from "./profile.service";
import { JoinWithPipe } from './joinwithpipe.pipe';


@Component({
    selector: 'app-banner',
    template:`
            <!--<img src="/assets/Banner.png" alt="Banner" class="img-fluid" >-->
    <div class="banner">
        <app-nav></app-nav>
        <div class="centered-banner-content">
            <h1 class="text-white">{{ profile.first_name }}  {{ profile.last_name }}</h1>
            <h4 class="text-white">{{ profile.passion | joinWithPipe}}</h4>
            <app-download></app-download>                          
            <div class="mt-3 rounded-5 p-2 custom-bg-color2 d-flex flex-row">
                <div class="p-2">
                    <span><i class="bi bi-linkedin me-2"></i></span>
                    <a class="custom-color1" href="https://www.linkedin.com/in/shruti-sasi/">linkedin.com/in/shruti-sasi/</a>
                </div>
                <div class="p-2">
                    <span><i class="bi bi-github me-2"></i></span>
                    <a class="custom-color1" href="https://github.com/ShrutiSasi/">github.com/ShrutiSasi/</a>
                </div>
            </div>                       
        </div>       
    </div>
        `,  
    imports: [NavigationComponent, JoinWithPipe, DownloadComponent]
})
export class BannerComponent{
    profileService = inject(ProfileService);
    profile = this.profileService.profile;
}