import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LockerRoomPage } from './locker-room.page';

describe('LockerRoomPage', () => {
  let component: LockerRoomPage;
  let fixture: ComponentFixture<LockerRoomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockerRoomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LockerRoomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
