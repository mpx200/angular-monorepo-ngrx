import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelegrafMainContainerComponent } from './telegraf-main-container.component';

describe('TelegrafMainContainerComponent', () => {
  let component: TelegrafMainContainerComponent;
  let fixture: ComponentFixture<TelegrafMainContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelegrafMainContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelegrafMainContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
