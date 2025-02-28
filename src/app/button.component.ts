import { Component } from "@angular/core";
import { saveAs } from 'file-saver';

@Component({
    selector: 'app-button',
    template: `
        <button class="btn btn-custom" (click)="downloadPDF()">{{title}}</button>
    `,    
})
export class ButtonComponent{
    title = "Download CV";

    downloadPDF() {
        const fileUrl = 'assets/pdf/ShrutiSasi_Resume.pdf';
        saveAs(fileUrl, 'ShrutiSasi_Resume.pdf'); // Trigger download
      }
}