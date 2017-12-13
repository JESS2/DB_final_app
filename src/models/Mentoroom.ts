export class Mentoroom {
    mentoroom_id: number;
    team_name: string;
    team_about: string;
    team_theme: string;
    team_link: string;
    mento_id: number;
    person_count: number;
    user_name: string;
    max_person: number;
    mento_name: string;

    constructor(team_name: string, team_about: string, team_theme: string, team_link: string, mento_id: number, max_person: number) {
        this.team_name = team_name;
        this.team_about = team_about;
        this.team_theme = team_theme;
        this.team_link = team_link;
        this.mento_id = mento_id;
        this.max_person = max_person;
    }
}
