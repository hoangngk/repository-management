import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposEditComponent } from './repos-edit.component';

describe('ReposEditComponent', () => {
  let component: ReposEditComponent;
  let fixture: ComponentFixture<ReposEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReposEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
