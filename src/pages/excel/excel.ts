import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { XlsxToJsonService } from '../../app/xlsx-to-json.service';
import { ServerService } from '../../app/server.service';

import * as _ from 'lodash';
import * as FileSaver from 'file-saver';
import * as XLSX from 'ts-xlsx';

@Component({
  templateUrl: 'excel.html'
})
export class ExcelPage {
  
  public result: any; //엑셀 데이터
  private xlsxToJsonService: XlsxToJsonService;
  private serverService: ServerService;

  constructor(public toastCtrl: ToastController, serverService: ServerService, xlsxToJsonService: XlsxToJsonService, public navCtrl: NavController) {
    this.xlsxToJsonService = xlsxToJsonService;
    this.serverService = serverService;
  }

   // 엑셀 업로드
   handleFile(event) {
    let file = event.target.files[0];
        this.xlsxToJsonService.processFileToJson({}, file)
            .subscribe(data => {
                data = _.map(data['sheets']['수강학생목록_데이터베이스실습'], (user) => {
                  console.log(user)
                  return {
                    // user_major: user['학부'],
                    // user_id: user['학번'],
                    // user_name: user['성명'],
                    // user_year: user['학년'],
                    // user_phone: user['연락처'],
                    // user_email: user['이메일'],
                    user_id: user['학번'],
                    user_major: user['학과'],
                    user_name: user['이름'],
                    user_sex: user['성별'],
                    user_year: user['학년'],
                    user_phone: user['휴대폰'],
                    user_email: user['이메일'],
                  }
                  // console.log(user)
                })
                this.result = JSON.stringify(data)
                console.log(this.result);
            })
  }
  

  
  // 회원 엑셀 등록
  excelEnter() {
  if(this.result) {
      this.serverService.excelEnter(this.result)
          .then(() => {
              this.presentToast('회원 등록이 완료 되었습니다.')
          })
          .catch(() => {
              this.presentToast('Error')
          })
  } else {
      this.presentToast('파일이 없습니다.')
  }
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