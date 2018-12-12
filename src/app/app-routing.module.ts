import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';

export const ROUTES: Routes = [
  {path: '', component:HomeComponent, pathMatch:'full'},
  {path: 'service', component: ServiceComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'blog', component: BlogComponent}
]
@NgModule({
 exports: [RouterModule]
})
export class AppRoutingModule { }
