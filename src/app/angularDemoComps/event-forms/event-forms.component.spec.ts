import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFormsComponent } from './event-forms.component';

describe('EventFormsComponent', () => {
  let component: EventFormsComponent;
  let fixture: ComponentFixture<EventFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
