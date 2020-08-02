import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LockerRoomPageRoutingModule } from './locker-room-routing.module';

import { LockerRoomPage } from './locker-room.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LockerRoomPageRoutingModule
  ],
  declarations: [LockerRoomPage]
})
export class LockerRoomPageModule {}
