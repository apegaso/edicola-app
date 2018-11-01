import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GvButtonsComponent } from './gv-buttons.component';

describe('GvButtonsComponent', () => {
  let component: GvButtonsComponent;
  let fixture: ComponentFixture<GvButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GvButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GvButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
