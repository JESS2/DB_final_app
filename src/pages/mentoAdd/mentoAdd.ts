import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { Mentoroom } from '../../models/Mentoroom';
import { ServerService } from '../../app/server.service';
import { RoomListPage } from '../roomList/roomList';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Upload } from '../../models/Upload';

@Component({
  templateUrl: 'mentoAdd.html'
})
export class MentoAddPage {

    private mento: Mentoroom;
    private serverService: ServerService;
    private files: Upload[] = [];
    private formData;
    private fileLabel: string = '';
    private mentoroom_id: number;
    private USERNAME: string;

    constructor(public navCtrl: NavController, public viewCtrl: ViewController, serverService: ServerService, public toastCtrl: ToastController) {
        this.mento = new Mentoroom("","","","",0,0);
        this.serverService = serverService;
        this.USERNAME = ServerService.USERNAME;
    }

    // 파일 업로드 버튼 클릭 핸들러
    onChange(event) {
        if(event.target.files && event.target.files.length > 0) {
        let file: File = event.target.files[0];
        this.formData = new FormData();
        this.formData.append(event.target.name, file, file.name);
        this.fileLabel = file.name;
        console.log(this.formData.entries())
        } else {
        this.formData = undefined;
        this.fileLabel = '';
        }
    }
    
    // // 멘토 등록 파일 서버에 저장
    // save() {
    //     this.mento.mento_id = ServerService.USERID;
    //     this.serverService.createMento(this.mento).then
    //     ( mentoroom_id => { this.mentoroom_id = mentoroom_id;
    //     console.log(this.mentoroom_id);
    //     ServerService.USERAUTH = 1;
    //     this.presentToast('멘토신청이 완료되었습니다');
    
    //     this.navCtrl.setRoot(RoomListPage);
    
    //     if(this.formData) {
    //     this.serverService.fileUpload(this.formData, this.mentoroom_id, 2)
    //     .then(() => {
    //         this.dismiss();
    //     })
    //     .catch(err => {
    //         this.dismiss();
    //     }) 
    //     }
    // });
    
    // }

    save(){
        this.mento.mento_id = ServerService.USERID;
        this.serverService.createMento(this.mento);
    
        ServerService.USERAUTH = 1;
        this.presentToast('멘토신청이 완료되었습니다');
    
        this.navCtrl.setRoot(RoomListPage);
        
    }

    //dismiss
    dismiss() {
        this.viewCtrl.dismiss();
    }
    
    //toast
    presentToast(message) {
        let toast = this.toastCtrl.create({
          message: message,
          duration: 3000,
          position: 'bottom',
        });
        toast.present();
    }
}
