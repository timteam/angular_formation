import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { TotalPipe } from './pipes/total.pipe';
import { LocalCurrencyPipe } from './pipes/local-currency.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TableComponent, TotalPipe, LocalCurrencyPipe],
  exports: [TableComponent, TotalPipe, LocalCurrencyPipe]
})
export class SharedModule { }
