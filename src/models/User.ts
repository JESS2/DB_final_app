export class User {
    user_id: number;
    user_password: string;
    user_name: string;
    user_major: string;
    user_year: string;
    user_phone: string;
    user_email: string;
    user_auth: number;
    user_sex: string;

    constructor(user_id: number, user_password: string) {
        this.user_id = user_id;
        this.user_password = user_password;
    }

}
