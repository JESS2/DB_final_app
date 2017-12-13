import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServerService } from '../../app/server.service';
import { Mentoroom } from '../../models/Mentoroom';
import { RoomDetailPage } from '../roomDetail/roomDetail';
import { MentoAddPage } from '../mentoAdd/mentoAdd';

@Component({
  templateUrl: 'roomList.html'
})
export class RoomListPage implements OnInit {
  private serverService: ServerService;
  private mentoroom_list: Mentoroom[] = [];
  private USERAUTH;

  constructor(serverService: ServerService, public navCtrl: NavController) {
    this.serverService = serverService;
    this.USERAUTH = ServerService.USERAUTH;
  }

  //처음 페이지 들어갈 때 자동으로 실행되는 메소드
  ngOnInit(){
    this.serverService.getRoomList().then(
      mentoroom => { this.mentoroom_list = mentoroom; });
  }

  //멘토방 상세보기 페이지로 이동
  openRoomDetailPage(mentoroom){
    this.navCtrl.push(RoomDetailPage, {mentoroom: mentoroom});
  }

  //멘토 신청 페이지로 이동
  openMentoaddPage() {
    this.navCtrl.push(MentoAddPage);
  }
  
}
