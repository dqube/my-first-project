import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';

import {LoggerConfig} from './logger.config';
import {CustomCGXLoggerService} from './custom-logger.service';
import { CGXLogger } from './services/logger.service';
import { CGXLoggerHttpService } from './services/http.service';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    CGXLogger,
    CGXLoggerHttpService,
    CustomCGXLoggerService
  ]
})
export class LoggerModule {
  constructor (@Optional() @SkipSelf() loggerModule: LoggerModule) {
    if (loggerModule) {
      throw new Error(
        'LoggerModule is already loaded. Import it in the main application module only');
    }
  }
  static forRoot(config: LoggerConfig | null | undefined): ModuleWithProviders {
    return {
      ngModule: LoggerModule,
      providers: [
        {provide: LoggerConfig, useValue: config || {}},
        CGXLogger,
        CGXLoggerHttpService,
        CustomCGXLoggerService
      ]
    };
  }
  static forChild(): ModuleWithProviders {
    return {
      ngModule: LoggerModule,
      providers: [
        CGXLogger,
        CGXLoggerHttpService,
        CustomCGXLoggerService
      ]
    };
  }
}
