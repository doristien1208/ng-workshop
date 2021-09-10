//import { TitleComponent } from './pages/homepage/interface/title/title.component';
//import { BackgroundComponent } from './pages/homepage/interface/background/background.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'contactpage',component:ContactpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
