import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubreditComponent } from './create-subredit.component';

describe('CreateSubreditComponent', () => {
  let component: CreateSubreditComponent;
  let fixture: ComponentFixture<CreateSubreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSubreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
