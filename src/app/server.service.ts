import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { User } from '../models/User';
import { Message } from '../models/Message';
import { Mentoroom } from '../models/Mentoroom';
import { Upload } from '../models/Upload';
import { Observable } from 'rxjs/Observable';
import { Menti } from '../models/Menti';

@Injectable()
export class ServerService {
  
    private URL = 'http://localhost:8089/sm_final/api/';

    static USERID: number;
    static USERAUTH: number;
    static USERNAME: string;

    constructor(private http: Http) { 
        this.http = http;
    }
 
    // 로그인
    login(user: User): Promise<Message> {
        let url = this.URL + 'user_login';
        return this.http.post(url, user)
            .toPromise()
            .then(res => res.json() as Message)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    // 신입생 엑셀 등록
    excelEnter(excel: Array<Object>) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({headers: headers});

        let url = this.URL + 'excel';
        return this.http.post(url, excel, options)
            .toPromise()
            .catch(this.handleError)
    }

    //회원 리스트
    getUserList(): Promise<User[]> {
        let url = this.URL + 'user_list'
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as User[])
            .catch(this.handleError);
    }

    //멘토방 리스트
    getRoomList(): Promise<Mentoroom[]> {
        let url = this.URL + 'mentoroom_list'
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Mentoroom[])
            .catch(this.handleError);
    }

    //멘토 신청
    createMento(mentoroom: Mentoroom): Promise<number>{
        let url = this.URL + 'mento/create';
        return this.http.post(url, mentoroom)
            .toPromise()
            .then(res => res.json() as number)
            .catch(this.handleError)
    }

    // 멘티 신청
    joinMentee(mid: number, uid: number) {
        let url = `${this.URL}mentoroom/${mid}/${uid}/mentijoin`;
        return this.http.get(url)
            .toPromise()
            .catch(this.handleError)
    }

    // 파일 업로드
    fileUpload(upload: FormData, room_id: number, kind: number) {
        let headers = new Headers();
        headers.append('enctype', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({headers: headers});

        let url = `${this.URL}mentoroom/fileupload/${room_id}/${kind}`; 
        return this.http.post(url, upload, options)
            .toPromise()
            .catch(this.handleError)
    }

    // 파일 리스트
    fileList(mentoroom_id: number): Promise<Upload[]> {
        let url = this.URL + 'mentoroom/filelist/' + mentoroom_id;
        return this.http.get(url)
            .toPromise()
            .then(res => res.json() as Upload[])
            .catch(this.handleError)
    }

    // 파일 삭제
    fileDelete(room_id: number, file_id: number) {
        let url = `${this.URL}mentoroom/filedelete/${file_id}`;
        return this.http.get(url)
            .toPromise()
            .catch(this.handleError)
    }

    // 멘티 목록
    menti_list(m_id: number): Promise<Menti[]> {
        let url = `${this.URL}mentoroom/${m_id}/menti_list`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Menti[])
            .catch(this.handleError)
    }
}