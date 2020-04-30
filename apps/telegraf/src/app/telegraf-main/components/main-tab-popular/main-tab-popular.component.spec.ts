import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTabPopularComponent } from './main-tab-popular.component';

describe('MainTabPopularComponent', () => {
  let component: MainTabPopularComponent;
  let fixture: ComponentFixture<MainTabPopularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTabPopularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTabPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
