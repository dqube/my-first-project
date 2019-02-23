import { CGXGridColumnType } from '../enums/controls.enum';

export interface Gridoptions {
    data?: any[];
    columns?: GridColumns[];
}

export interface GridColumns {
    title: string;
    width?: number;
    type?: CGXGridColumnType;
}
