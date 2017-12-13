import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServerService } from '../../app/server.service';
import { User } from '../../models/User';
import { Menti } from '../../models/Menti';

@Component({
  templateUrl: 'userlist.html'
})
export class UserListPage implements OnInit {
  private serverService: ServerService;

  private user: User;

  constructor(public navParams: NavParams, public navCtrl: NavController, serverService: ServerService) {
    this.serverService = serverService;
    this.user = this.navParams.get("menti");
  }

  //처음 페이지 들어갈 때 자동으로 실행되는 메소드
  ngOnInit(){  }


}