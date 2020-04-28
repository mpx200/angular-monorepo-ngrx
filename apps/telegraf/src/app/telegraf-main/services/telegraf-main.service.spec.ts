import { TestBed } from '@angular/core/testing';

import { TelegrafMainService } from './telegraf-main.service';

describe('TelegrafMainService', () => {
  let service: TelegrafMainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelegrafMainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
