import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiscreenComponent } from './uiscreen.component';

describe('UiscreenComponent', () => {
  let component: UiscreenComponent;
  let fixture: ComponentFixture<UiscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiscreenComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
