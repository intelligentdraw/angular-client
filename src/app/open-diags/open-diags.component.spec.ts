import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenDiagsComponent } from './open-diags.component';

describe('OpenDiagsComponent', () => {
  let component: OpenDiagsComponent;
  let fixture: ComponentFixture<OpenDiagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenDiagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenDiagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
