import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { BleacherReportComponent } from './bleacher-report/bleacher-report.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    BleacherReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
		HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
	
}
