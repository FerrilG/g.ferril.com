import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceRewardsComponent } from './ecommerce-rewards.component';

describe('EcommerceRewardsComponent', () => {
  let component: EcommerceRewardsComponent;
  let fixture: ComponentFixture<EcommerceRewardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommerceRewardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
