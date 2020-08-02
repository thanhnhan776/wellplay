import { Injectable } from '@angular/core';
import { User } from '@model/user.model';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private loggedInUser: User;

    constructor() {
        this.loggedInUser = new User(
            '001',
            'leonelmessi',
            'Leonel',
            'Messi',
            '../../../assets/icon/user-icon/messi.png',
        );
    }

    public getLoggedInUser(): User {
        return this.loggedInUser;
    }
}