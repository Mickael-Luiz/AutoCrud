import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificationRegistrationComponent } from './classification-registration.component';

describe('ClassificationRegistrationComponent', () => {
  let component: ClassificationRegistrationComponent;
  let fixture: ComponentFixture<ClassificationRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassificationRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassificationRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
