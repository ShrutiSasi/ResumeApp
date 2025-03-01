import { Component, ElementRef, inject, ViewChild } from "@angular/core";
import { ProfileService } from "./profile.service";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-contact',
    template: `
    <div class="contactMap mt-4">
        <div class="d-flex justify-content-center align-items-center">
        <div class="rounded-2 bg-white shadow center">
            <h4 class="text-center pt-3"><strong>{{ title }}</strong></h4>
            <div class="d-flex flex-row m-5">
                <div class="pe-4 ps-4">
                    <strong>Feel Free to contact me</strong>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-person-circle"></i></span>
                        <input type="text" class="form-control" placeholder="Name" [(ngModel)]="emailData.name">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-vector-pen"></i></span>
                        <input type="text" class="form-control" placeholder="Subject" [(ngModel)]="emailData.subject">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-envelope-at"></i></span>
                        <input type="text" class="form-control" placeholder="E-mail" [(ngModel)]="emailData.emailId">
                    </div>
                    <div class="input-group">
                        <span class="input-group-text"><i class="bi bi-journal-text"></i></span>
                        <textarea class="form-control" placeholder="Your Message" [(ngModel)]="emailData.message"></textarea>
                    </div>
                    <!-- Hidden anchor tag for triggering mailto -->
                    <button #emailButton type="button" class="btn custom-bg-color1 text-white mt-4" (click)="sendEmail()" >Send</button> 
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <span><strong>Address</strong></span>
                    <span class="pb-4">{{ profile.address }}</span>
                    <span><strong>Phone</strong></span>
                    <span class="pb-4">{{ profile.phone }}</span>
                    <span><strong>Email</strong></span>
                    <span class="pb-4">{{ profile.email }}</span>
                </div>
            </div>            
        </div>
        </div>
    </div>
    `,
    imports: [FormsModule]
})
export class ContactComponent{
    @ViewChild('emailButton') emailButtonRef!: ElementRef;
    profileService = inject(ProfileService);
    profile = this.profileService.profile;

    title = "Contact Me";
    emailData = {
        name: "",
        subject: "",
        emailId: "",
        message: "",
    };

    sendEmail(){
        const { name, subject, emailId, message } = this.emailData;
        
        if (!name || !subject || !emailId) {
            alert('Please fill all fields');
            return;
        }

        // Create the "mailto:" link
        const mailtoLink = `mailto:${this.profile.email}?from=${encodeURIComponent(emailId)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
        
        // Use ElementRef to set the href dynamically on a button
        this.emailButtonRef.nativeElement.href = mailtoLink;
        this.emailButtonRef.nativeElement.click();
    }
}