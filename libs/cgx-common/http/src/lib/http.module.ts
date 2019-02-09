import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './api.service';

@NgModule({
  exports: [],
  imports: [HttpClientModule],
  providers: [ApiService]
})
export class HttpModule {
  /** @deprecated */
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: HttpModule,
      providers: []
    };
  }
}
