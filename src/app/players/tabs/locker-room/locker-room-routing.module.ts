import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LockerRoomPage } from './locker-room.page';

const routes: Routes = [
  {
    path: '',
    component: LockerRoomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LockerRoomPageRoutingModule {}
