import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LayoutComponent } from './pages/layout/layout.component';
import { ServicesComponent } from './pages/services/services.component';
import { SectionsComponent } from './pages/sections/sections.component';
import { HomeComponent } from './pages/home/home.component';
import { RequestComponent } from './pages/request/request.component';
import { InfoComponent } from './pages/info/info.component';
import { AgenciesComponent } from './pages/agencies/agencies.component';
import { AboutComponent } from './pages/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ServicesComponent,
    SectionsComponent,
    HomeComponent,
    RequestComponent,
    InfoComponent,
    AgenciesComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
