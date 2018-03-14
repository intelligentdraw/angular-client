import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageActorDialogComponent } from './manage-actor-dialog.component';

describe('ManageActorDialogComponent', () => {
  let component: ManageActorDialogComponent;
  let fixture: ComponentFixture<ManageActorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageActorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageActorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
