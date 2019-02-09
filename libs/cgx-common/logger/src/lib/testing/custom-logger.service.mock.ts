import {CGXLoggerMock} from './logger.service.mock';

/**
 * CustomCGXLoggerServiceMock is a mock for CustomCGXLoggerService
 */
export class CustomCGXLoggerServiceMock {

  constructor() {
  }

  create(): CGXLoggerMock {
    // you can inject your own httpService or use the default,
    return new CGXLoggerMock();
  }
}


