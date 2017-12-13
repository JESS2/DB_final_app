import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ServerService } from '../../app/server.service';

import { User } from '../../models/User';
import { HomePage } from '../home/home';
import { RoomListPage } from '../roomList/roomList';

@Component({
  templateUrl: 'login.html'
})
export class LoginPage {

    private user: User;
    private serverService: ServerService;

    constructor(public toastCtrl: ToastController, serverService: ServerService, public navCtrl: NavController) {
        this.user = new User(0,"");
        this.serverService = serverService;
    }

    //로그인
    signIn() {
        this.serverService.login(this.user).then(
            message => { 
                if(message.key==0) {
                    ServerService.USERID = message.user_id;
                    ServerService.USERAUTH = message.user_auth;
                    this.presentLoginToast(message);
                    this.navCtrl.setRoot(RoomListPage);
                    console.log(ServerService.USERID + ' 로그인 완료');
                }
                else {
                    this.presentLoginToast(message);
                    console.log('로그인 실패');
                }
        });
    }

    presentLoginToast(message) {
        let toast = this.toastCtrl.create({
          message: message.title,
          duration: 3000,
          position: 'bottom',
        });
        toast.present();
    }

  
}
