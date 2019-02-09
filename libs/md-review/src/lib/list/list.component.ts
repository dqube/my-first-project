import { Component, OnInit } from '@angular/core';
import { CGXLogger } from '@cgx-common/logger';
import { ConfigService } from '@cgx-common/config';

@Component({
  selector: 'cgx-md-review-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  constructor(private logger: CGXLogger, private configService: ConfigService) {
    this.logger.warn('Your log message goes here');
    this.logger.debug('Multiple', 'Argument', 'support');    
    console.log(configService.get('HOST_API'));
    console.log(configService.get('API_ENDPOINTS'));
    console.log(configService.get('API_ENDPOINTS.USER'));
    
  }

  ngOnInit() {
  }

}
