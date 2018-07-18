export class HomeModel {

    remedyNumber: string;
    date: string;
    user: string;
    description: string;

    constructor (
        remedyNumber: string,
        date: string,
        user: string,
        description: string
    ) {
        this.remedyNumber = remedyNumber;
        this.date = date;
        this.user = user;
        this.description = description;
    }

}
