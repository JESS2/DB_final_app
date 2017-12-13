import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ServerService } from '../../app/server.service';
import { User } from '../../models/User';

import { LoginPage } from '../login/login';
import { RoomListPage } from '../roomList/roomList';

@Component({
  templateUrl: 'myPage.html'
})
export class MyPage {

  private serverService: ServerService;
  private user: User;

  constructor(public navCtrl: NavController, serverService: ServerService, public toastCtrl: ToastController) {
    this.serverService = serverService;
    this.user = new User(0,"");
  }

  //로그인 페이지로 이동
  login() {
    console.log('로그인 페이지로 이동');
    this.navCtrl.setRoot(LoginPage);
  }

  //로그아웃
  logout() {
      console.log(ServerService.USERID + ' 로그아웃');
      ServerService.USERID = null;
      ServerService.USERAUTH = null;
      this.presentToast('로그아웃 되었습니다');
  }

  presentLoginToast(message) {
    let toast = this.toastCtrl.create({
      message: message.title,
      duration: 3000,
      position: 'bottom',
    });
    toast.present();
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom',
    });
    toast.present();
  }
  

}
