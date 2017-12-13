import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RoomListPage } from '../pages/roomList/roomList';
import { MyPage } from '../pages/myPage/myPage';
import { ExcelPage } from '../pages/excel/excel';
import { UserListPage } from '../pages/userList/userList';
import { LoginPage } from '../pages/login/login';
import { RoomDetailPage } from '../pages/roomDetail/roomDetail'
import { ServerService } from './server.service';
import { XlsxToJsonService } from './xlsx-to-json.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MentoAddPage } from '../pages/mentoAdd/mentoAdd';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RoomListPage,
    MyPage,
    ExcelPage,
    UserListPage,
    LoginPage,
    RoomDetailPage,
    MentoAddPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RoomListPage,
    MyPage,
    ExcelPage,
    UserListPage,
    LoginPage,
    RoomDetailPage,
    MentoAddPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ServerService,
    XlsxToJsonService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
