import { TestBed } from '@angular/core/testing';

import { MqttModuleServiceService } from './mqtt-module-service.service';

describe('MqttModuleServiceService', () => {
  let service: MqttModuleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MqttModuleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
