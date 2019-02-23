import { NgModule, ModuleWithProviders } from '@angular/core';

import { CoreComponent } from './core.component';
import { StorageService } from './services/storage.service';
import { UppercasePipe } from './pipes/uppercase.pipe';

@NgModule({
  declarations: [CoreComponent, UppercasePipe],
  imports: [
  ],
  exports: [CoreComponent,UppercasePipe]
})
export class CoreModule { 
  static forRoot(): ModuleWithProviders {
    return {
        ngModule: CoreModule,
        providers: [
            // Providers           
            StorageService
        ]
    };
}
}

