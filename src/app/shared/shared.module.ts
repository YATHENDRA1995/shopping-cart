import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';

import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    DataTablesModule
  ],
  exports:[TableComponent]
})
export class SharedModule { }
