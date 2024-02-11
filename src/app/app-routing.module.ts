
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfiloComponent } from './portfilo/portfilo.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home' ,component:HomeComponent,title:'Home'},
  {path:'about' ,component:AboutComponent,title:'About'},
  {path:'contact' ,component:ContactComponent,title:'Contact'},
  {path:'portfilo',component:PortfiloComponent,title:'Portfilo'},
  {path:'**',component:NotFoundComponent,title:'Not Found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
