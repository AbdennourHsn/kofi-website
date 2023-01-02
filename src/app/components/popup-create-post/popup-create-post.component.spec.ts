import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCreatePostComponent } from './popup-create-post.component';

describe('PopupCreatePostComponent', () => {
  let component: PopupCreatePostComponent;
  let fixture: ComponentFixture<PopupCreatePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupCreatePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupCreatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
