import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './core/homepage/homepage.component';
import { WelcomepageComponent } from './core/welcomepage/welcomepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    WelcomepageComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
