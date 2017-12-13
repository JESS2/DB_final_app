export class Menti {
    mento_id: number;
    menti_id: number;
    user_name: string;
    user_major: string;
    user_year: string;
    user_phone: string;
    user_email: string;
    user_sex: string;
    

    constructor(mento_id, menti_id, user_name, user_major, user_year, user_phone, user_email, user_sex) {
        this.mento_id = mento_id;
        this.menti_id = menti_id;
        this.user_name = user_name;
        this.user_major = user_major;
        this.user_year = user_year;
        this.user_phone = user_phone;
        this.user_email = user_email;
        this.user_sex = user_sex;
        
    }

}