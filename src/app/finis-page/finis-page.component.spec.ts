import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinisPageComponent } from './finis-page.component';

describe('FinisPageComponent', () => {
  let component: FinisPageComponent;
  let fixture: ComponentFixture<FinisPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinisPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinisPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
