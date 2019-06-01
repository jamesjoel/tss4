import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { NotComponent } from './not/not.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [
  {
    path : '' , component : NotComponent 
  },
  {
    path : 'home' ,  component : ContentComponent 
  },
  { 
    path : 'about', component : AboutComponent
  },
  {
    path : 'contact', component : ContactComponent
  },
  {
    path : 'not', component : NotComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
