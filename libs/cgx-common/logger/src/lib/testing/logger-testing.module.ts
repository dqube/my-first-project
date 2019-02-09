import { NgModule } from '@angular/core';

import { CGXLogger } from '../services/logger.service';
import { CGXLoggerMock } from './logger.service.mock';
import { CGXLoggerHttpService } from '../services/http.service';
import { CGXLoggerHttpServiceMock } from './http.service.mock';
import { CustomCGXLoggerService } from '../custom-logger.service';
import { CustomCGXLoggerServiceMock } from './custom-logger.service.mock';

@NgModule({
  providers: [
    { provide: CGXLogger, useClass: CGXLoggerMock },
    { provide: CGXLoggerHttpService, useClass: CGXLoggerHttpServiceMock },
    { provide: CustomCGXLoggerService, useClass: CustomCGXLoggerServiceMock },
  ]
})
export class LoggerTestingModule {
}
