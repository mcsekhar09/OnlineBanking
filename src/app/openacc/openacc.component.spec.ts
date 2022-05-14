import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenaccComponent } from './openacc.component';

describe('OpenaccComponent', () => {
  let component: OpenaccComponent;
  let fixture: ComponentFixture<OpenaccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenaccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
