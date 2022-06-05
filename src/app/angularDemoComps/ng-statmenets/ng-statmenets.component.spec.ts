import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStatmenetsComponent } from './ng-statmenets.component';

describe('NgStatmenetsComponent', () => {
  let component: NgStatmenetsComponent;
  let fixture: ComponentFixture<NgStatmenetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgStatmenetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgStatmenetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
