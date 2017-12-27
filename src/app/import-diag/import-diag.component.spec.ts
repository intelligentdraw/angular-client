import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportDiagComponent } from './import-diag.component';

describe('ImportDiagComponent', () => {
  let component: ImportDiagComponent;
  let fixture: ComponentFixture<ImportDiagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportDiagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportDiagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
