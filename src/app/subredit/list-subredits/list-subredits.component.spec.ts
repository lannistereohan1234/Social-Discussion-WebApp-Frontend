import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubreditsComponent } from './list-subredits.component';

describe('ListSubreditsComponent', () => {
  let component: ListSubreditsComponent;
  let fixture: ComponentFixture<ListSubreditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSubreditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSubreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
