import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CGXHttp } from './http.service';

@NgModule({
  exports: [],
  imports: [HttpClientModule],
  providers: [CGXHttp]
})
export class CGXHttpModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CGXHttpModule,
      providers: []
    };
  }
}
