import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { SectionsComponent } from './pages/sections/sections.component';
import { ServicesComponent } from './pages/services/services.component';
import { RequestComponent } from './pages/request/request.component';
import { InfoComponent } from './pages/info/info.component';
import { AgenciesComponent } from './pages/agencies/agencies.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'sections', component: SectionsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'request', component: RequestComponent },
  { path: 'form', component: InfoComponent },
  { path: 'agencies', component: AgenciesComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
