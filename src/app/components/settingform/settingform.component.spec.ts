import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingformComponent } from './settingform.component';

describe('SettingformComponent', () => {
  let component: SettingformComponent;
  let fixture: ComponentFixture<SettingformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
