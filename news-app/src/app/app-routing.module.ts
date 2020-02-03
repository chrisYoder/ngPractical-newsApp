import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { BleacherReportComponent } from './bleacher-report/bleacher-report.component';


const routes: Routes = [
	{}
	{ path: 'news', component: NewsComponent }, 
	{ path: 'bleacher-report', component: BleacherReportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
