import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GvVendutiComponent } from './gv-venduti.component';

describe('GvVendutiComponent', () => {
  let component: GvVendutiComponent;
  let fixture: ComponentFixture<GvVendutiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GvVendutiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GvVendutiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
