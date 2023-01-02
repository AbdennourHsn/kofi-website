import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyACoffeComponent } from './buy-a-coffe.component';

describe('BuyACoffeComponent', () => {
  let component: BuyACoffeComponent;
  let fixture: ComponentFixture<BuyACoffeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyACoffeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyACoffeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
