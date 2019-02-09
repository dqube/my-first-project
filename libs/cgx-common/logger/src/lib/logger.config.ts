import {CgxLoggerLevel} from './types/logger-level.enum';

export class LoggerConfig {
  level: CgxLoggerLevel;
  serverLogLevel?: CgxLoggerLevel;
  serverLoggingUrl?: string;
  disableConsoleLogging?: boolean;
}
