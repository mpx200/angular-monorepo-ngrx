import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTabCommentsComponent } from './main-tab-comments.component';

describe('MainTabCommentsComponent', () => {
  let component: MainTabCommentsComponent;
  let fixture: ComponentFixture<MainTabCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTabCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTabCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
