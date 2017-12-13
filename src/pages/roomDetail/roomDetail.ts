import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Mentoroom } from '../../models/Mentoroom';
import { ServerService } from '../../app/server.service';
import { RoomListPage } from '../roomList/roomList';
import { Menti } from '../../models/menti';
import { UserListPage } from '../userList/userList';

@Component({
  templateUrl: 'roomDetail.html'
})
export class RoomDetailPage implements OnInit {

  private mentoroom: Mentoroom;
  private serverService: ServerService;
  private USERAUTH: number;
  private USERID: number;
  private mento_name;
  private mento_id;
  private mentis: Menti[] =[];
  

  constructor(public toastCtrl: ToastController, serverService: ServerService, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.mentoroom = this.navParams.get("mentoroom");
    this.serverService = serverService;
    this.USERID = ServerService.USERID;
    this.USERAUTH = ServerService.USERAUTH;
    this.mento_id = this.mentoroom.mento_id;
    this.mento_name = this.mentoroom.mento_name;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ngOnInit(){
    this.serverService.menti_list(this.mento_id)
    .then(menti => this.mentis = menti);
  }
  


  //멘티신청
  joinMentee() {
    this.serverService.joinMentee(this.mentoroom.mento_id, this.USERID)
      this.presentToast('멘티신청이 완료되었습니다.')
      ServerService.USERAUTH = 2;
      this.navCtrl.setRoot(RoomListPage);
  }

  //     this.mento.mento_id = ServerService.USERID;
  //     this.serverService.createMento(this.mento);
  
  //     ServerService.USERAUTH = 1;
  //     this.presentToast('멘토신청이 완료되었습니다');
  
  //     this.navCtrl.setRoot(RoomListPage);
  
  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom',
    });
    toast.present();
  }

  mentiInfo(menti) {
    this.navCtrl.push(UserListPage, {menti: menti});
  }

}
