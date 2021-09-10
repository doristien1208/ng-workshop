import { BackgroundComponent } from './pages/homepage/interface/background/background.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { TitleComponent } from './pages/homepage/interface/title/title.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactpageComponent,
    TitleComponent,
    BackgroundComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
