import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotidComponent } from './forgotid.component';

describe('ForgotidComponent', () => {
  let component: ForgotidComponent;
  let fixture: ComponentFixture<ForgotidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
