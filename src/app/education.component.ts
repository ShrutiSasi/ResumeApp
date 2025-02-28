import { Component } from "@angular/core";
import { CardComponent } from "./card.component";
import { Education } from "./education.model";
import { DatePipe } from "@angular/common";

@Component({
    selector: 'app-education',
    template: `
    <div id="education" class="row mt-4 p-4">
        <h4 class="text-center pt-3"><strong>{{ title }}</strong></h4>
        @for(edu of education; track edu){
            <app-card>
                <div placeholder1>
                    {{ edu.from_date | date: 'MMM yyyy' }} - {{ edu.to_date | date: 'MMM yyyy' }} <br>                    
                </div>
                <div class="p-3" placeholder2>
                    {{ edu.degree }} <br>
                    {{ edu.college }} <br>
                    {{ edu.location }} <br>
                </div>
            </app-card>
        }
    </div>`,
    imports: [CardComponent, DatePipe]
})
export class EducationComponent{
    title = "Education";
    education: Education[] = [
        {
            college: 'Humber Polytechnic',
            location: 'Toronto, ON, Canada',
            degree: 'Full Stack .NET Cloud Developer Program',
            from_date: new Date(2024,10),
            to_date: new Date(2025,3)
        },
        {
            college: 'Visvesvaraya Technological University',
            location: 'Belgavi, India',
            degree: 'Bachelor of Information Science and Engineering',
            from_date: new Date(2005,9),
            to_date: new Date(2009,8)
        }
    ];
}