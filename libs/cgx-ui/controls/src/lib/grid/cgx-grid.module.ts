import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CgxGridComponent } from './cgx-grid/cgx-grid.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
@NgModule({
  declarations: [CgxGridComponent],
  imports: [
    CommonModule,GridModule,DateInputsModule,DropDownsModule
  ]
})
export class CGXGridModule { }
