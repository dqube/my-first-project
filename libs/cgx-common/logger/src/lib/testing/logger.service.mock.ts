import { HttpHeaders, HttpParams } from '@angular/common/http';
import { CGXLoggerMonitor } from '../logger-monitor';
import { LoggerConfig } from '../logger.config';

export class CGXLoggerMock {

  constructor() {
  }

  trace(message: any, ...additional: any[]) {
  }

  debug(message: any, ...additional: any[]) {
  }

  info(message: any, ...additional: any[]) {
  }

  log(message: any, ...additional: any[]) {
  }

  warn(message: any, ...additional: any[]) {
  }

  error(message: any, ...additional: any[]) {
  }

  fatal(message: any, ...additional: any[]) {
  }

  updateConfig(config: any) {

  }

  setCustomHttpHeaders(headers: HttpHeaders) {
  }

  setCustomParams(params: HttpParams) {
  }

  registerMonitor(monitor: CGXLoggerMonitor) {
  }

  getConfigSnapshot(): LoggerConfig {
    return new LoggerConfig();
  }
}
