import { Component } from "@angular/core";
import { Skill } from "./skill.model";

@Component({
    selector: 'app-skill',
    template: `
    <div id="skills" class="row shadow rounded-2 mt-4 p-4">
        <h4 class="pt-3"><strong>Skills</strong></h4>
        <ul class="list-unstyled">
            @for(skill of skills; track skill){
                <li>
                    <label>{{skill.name}}</label>
                    <div class="progress">
                        <div class="progress-bar custom-bg-color2" role="progressbar" [style.width.%]="skill.rating" [attr.aria-valuenow]="skill.rating" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </li>
            }        
        </ul>
    </div>  
    `,
})
export class SkillComponent{
    skills: Skill[] = [
        {
            name: 'C#',
            rating: 75,
        },
        {
            name: 'SQL',
            rating: 90,
        },
        {
            name: 'Python',
            rating: 50,
        },
        {
            name: 'HTML',
            rating: 70
        },
        {
            name: 'CSS',
            rating: 70,
        },
        {
            name: 'Javascript',
            rating: 60,
        }
    ];
}