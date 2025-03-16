import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAllocatedSchoolsComponent } from './my-allocated-schools.component';

describe('MyAllocatedSchoolsComponent', () => {
  let component: MyAllocatedSchoolsComponent;
  let fixture: ComponentFixture<MyAllocatedSchoolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyAllocatedSchoolsComponent]
    });
    fixture = TestBed.createComponent(MyAllocatedSchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
