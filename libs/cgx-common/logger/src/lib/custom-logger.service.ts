import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

import { LoggerConfig } from './logger.config';
import { CGXLoggerHttpService } from './services/http.service';
import { CGXLoggerMonitor } from './logger-monitor';
import { CGXLogger } from './services/logger.service';
import { ConfigService } from '@cgx-common/config';


/**
 * CustomCGXLoggerService is designed to allow users to get a new instance of a logger
 */
@Injectable()
export class CustomCGXLoggerService {

  constructor(private readonly httpService: CGXLoggerHttpService,
    @Inject(PLATFORM_ID) private readonly platformId, private readonly configService:ConfigService) {
  }

  create(config: LoggerConfig, httpService?: CGXLoggerHttpService, logMonitor?: CGXLoggerMonitor): CGXLogger {
    // you can inject your own httpService or use the default,
    const logger = new CGXLogger(httpService || this.httpService, config, this.platformId, this.configService);

    if (logMonitor) {
      logger.registerMonitor(logMonitor);
    }

    return logger;
  }
}


