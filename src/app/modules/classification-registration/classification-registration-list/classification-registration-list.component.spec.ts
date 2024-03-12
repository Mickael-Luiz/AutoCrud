import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificationRegistrationListComponent } from './classification-registration-list.component';

describe('ClassificationRegistrationListComponent', () => {
  let component: ClassificationRegistrationListComponent;
  let fixture: ComponentFixture<ClassificationRegistrationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassificationRegistrationListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassificationRegistrationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
