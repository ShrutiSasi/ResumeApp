import { Injectable } from "@angular/core";
import { Profile } from './profile.model';

@Injectable({
    providedIn: "root"
})
export class ProfileService{
    profile: Profile = {
        id: 1,
        first_name: 'Shruti',
        last_name: 'Sasi',
        email: 'shruti.sasi14@live.com',
        phone: '+1(437)430-2317',
        address: 'Kitchener, ON, Canada',
        languages: ['English'],
        passion: ['WEB Development', 'Data Analysis']    
     };
    
}