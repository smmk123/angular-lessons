import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcvhiveDateComponent } from './arcvhive-date.component';

describe('ArcvhiveDateComponent', () => {
  let component: ArcvhiveDateComponent;
  let fixture: ComponentFixture<ArcvhiveDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArcvhiveDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcvhiveDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
