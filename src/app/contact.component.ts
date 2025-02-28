import { Component, inject, ViewChild } from "@angular/core";
import { ProfileService } from "./profile.service";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-contact',
    template: `
    <div class="d-flex justify-content-center align-items-center">
    <div class="col-11 rounded-2 mt-4 shadow center">
        <h4 class="text-center pt-3"><strong>{{ title }}</strong></h4>
        <div class=" table-responsive">
        <table class="table">
            <tr>
                <td>
                    <div>
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
                        <button #emailButton type="button" class="btn custom-bg-color1 text-white mt-4" (click)="sendEmail()">Send</button> 
                    </div>
                </td>
                <td>
                    <p><strong>Address</strong> <br>
                        {{ profile.address }} <br>
                    </p>
                    <p><strong>Phone</strong> <br>
                        {{ profile.phone }} <br>
                    </p>
                    <p><strong>Email</strong> <br>
                        {{ profile.email }} <br>
                    </p>
                </td>
            </tr>
        </table>
        </div>
    </div>
</div>
    `,
    imports: [FormsModule]
})
export class ContactComponent{
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
        //@ViewChild('emailButton') emailButton!: ElementRef;

        if (!name || !subject || !emailId) {
            alert('Please fill all fields');
            return;
        }

        window.location.href = `mailto:${this.profile.email}?from=${encodeURIComponent(emailId)}subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    }
}