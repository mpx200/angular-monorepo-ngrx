import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelegrafMainComponent } from './telegraf-main.component';

describe('TelegrafMainComponent', () => {
  let component: TelegrafMainComponent;
  let fixture: ComponentFixture<TelegrafMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelegrafMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelegrafMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
