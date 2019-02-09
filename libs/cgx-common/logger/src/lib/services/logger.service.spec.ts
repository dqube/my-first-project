import { inject, TestBed } from '@angular/core/testing';

import { CGXLogger } from './logger.service';
import { CGXLoggerHttpService } from './http.service';
import { CGXLoggerHttpServiceMock } from '../testing/http.service.mock';
import { LoggerConfig } from '../logger.config';

describe('CGXLogger', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CGXLogger,
        { provide: CGXLoggerHttpService, useClass: CGXLoggerHttpServiceMock },
        LoggerConfig
      ]
    });
  });

  it('should handle circular structures', inject([CGXLogger], (logger: CGXLogger) => {
    const a = {
      test: 'test'
    };

    a['a'] = a;

    spyOn(window, 'console');

    logger.error('test', a);

    expect(window.console).toHaveBeenCalledWith('false');

  }));
});
