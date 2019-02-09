import { CGXLogInterface } from './types/cgx-log.interface';

export abstract class CGXLoggerMonitor {
  abstract onLog(logObject: CGXLogInterface): void;
}
