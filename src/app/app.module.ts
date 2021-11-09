import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {StockComponent} from './components/stock/stock.component';
import {HeaderComponent} from './components/header/header.component';
import {DxChartModule} from "devextreme-angular";

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    DxChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
