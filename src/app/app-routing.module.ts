import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { single } from 'rxjs';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { SingleComponent } from './single/single.component';

const routes: Routes = [
  { path : '' , component : HomeComponent},
  { path : 'faq' , component : FaqComponent},
  { path : 'single' , component : SingleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
