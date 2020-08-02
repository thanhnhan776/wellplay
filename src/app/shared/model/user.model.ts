export class User {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    avatar: string;

    constructor(id: string, username: string,
        firstName: string, lastName: string, avatar: string) {
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.avatar = avatar;
    }

    public getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}