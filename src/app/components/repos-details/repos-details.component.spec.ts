import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposDetailsComponent } from './repos-details.component';

describe('ReposDetailsComponent', () => {
  let component: ReposDetailsComponent;
  let fixture: ComponentFixture<ReposDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReposDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
