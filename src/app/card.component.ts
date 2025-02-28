import { Component } from '@angular/core';

@Component({
    selector: 'app-card',
    template: `
    <div class="d-flex flex-row mb-3 shadow">
        <div class="p-2 w-25 d-flex justify-content-center align-items-center custom-bg-color1 text-white"><ng-content select="[placeholder1]"></ng-content></div>
        <div class="p-4 w-75" style="text-align: justify;"><ng-content select="[placeholder2]"></ng-content></div>
    </div>
    `,
})
export class CardComponent{
    
}
