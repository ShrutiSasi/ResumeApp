import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from './banner.component';
import { AboutInfoComponent } from "./aboutinfo.component";
import { SkillComponent } from './skill.component';
import { ExperienceComponent } from "./experience.component";
import { EducationComponent } from './education.component';
import { ContactComponent } from "./contact.component";
import { FooterComponent } from "./footer.component";

@Component({
  selector: 'app-root',
  imports: [BannerComponent, AboutInfoComponent, SkillComponent, ExperienceComponent, EducationComponent, ContactComponent, FooterComponent],
  template: `
  <div class="container-fluid w-75" >
    <app-banner></app-banner>
    <div class="container">
      <app-aboutinfo></app-aboutinfo>  
      <app-skill></app-skill>
      <app-experience></app-experience>
      <app-education></app-education>      
      <app-contact></app-contact>      
    </div>
    <app-footer></app-footer>
  </div>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ResumeApp';    
}
