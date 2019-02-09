import { CgxLoggerLevel } from './logger-level.enum';

export class CGXLogInterface {
  level: CgxLoggerLevel;
  timestamp: string;
  fileName: string;
  lineNumber: string;
  message: string;
  additional: any[];
}
