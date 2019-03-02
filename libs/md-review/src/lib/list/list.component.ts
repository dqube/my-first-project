import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { CGXLogger } from '@cgx-common/logger';
import { ConfigService } from '@cgx-common/config';
import { CgxGridComponent, GridColumns, DataTypeOption } from '@cgx-ui/controls';
import { products, categories } from '../model/md-review.model';
@Component({
  selector: 'cgx-md-review-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  @ViewChild('grid') grid: CgxGridComponent;
  products: any[] = products;
  columns: GridColumns[];
  pageable: boolean;
  take = 5;
  groupable: any;
  gridSelectedIndex = 0;
  constructor(private logger: CGXLogger, private configService: ConfigService,private componentFactoryResolver: ComponentFactoryResolver) {
    this.logger.warn('Your log message goes here');
    this.logger.debug('Multiple', 'Argument', 'support');    
    console.log(configService.get('HOST_API'));
    console.log(configService.get('API_ENDPOINTS'));
    console.log(configService.get('API_ENDPOINTS.USER'));

    this.columns = [
      {
        columnName: 'ProductID',
        columnDisplay: 'Id',
        dataType: DataTypeOption.number,
        width: 40
      },
      {
        columnName: 'ProductName',
        columnDisplay: 'Name',
        dataType: DataTypeOption.string,
        width: 250
      },
      {
        columnName: 'Category',
        columnDisplay: 'Category',
        dataType: DataTypeOption.dropdown,
        width: 140,
        ddlData: categories,
        ddlValueField: 'CategoryID',
        ddlTextField: 'CategoryName',
        ddlLongText: 'Description'
      },
      {
        columnName: 'UnitPrice',
        columnDisplay: 'Price',
        dataType: DataTypeOption.number,
        width: 80
      },
      {
        columnName: 'UnitsInStock',
        columnDisplay: 'In stock',
        dataType: DataTypeOption.number,
        width: 80
      },
      {
        columnName: 'Discontinued',
        columnDisplay: 'Discontinued',
        dataType: DataTypeOption.checkbox,
        width: 60,
        disabled: true
      },
      {
        columnName: 'FirstOrderedOn',
        columnDisplay: 'First Ordered On',
        dataType: DataTypeOption.date,
        width: 160
      }
    ];

    this.pageable = true;
    this.groupable = false;
    
  }

  ngOnInit() {
  }
  togglePageable() {
    this.pageable = !this.pageable;
    this.take = this.pageable ? 5 : 0;
    this.grid.togglePageable.emit({pageable: this.pageable, take: this.take});
  }

  toggleGroupable() {
    this.groupable = !this.groupable;
    this.grid.toggleGroupable.emit(this.groupable);
  }

  selectedItemChange(event: any) {
    console.log(event);
  }
}
