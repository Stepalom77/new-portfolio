import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './home/about-me/about-me.component';
//import { ContactMeComponent } from './home/contact-me/contact-me.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './home/projects/projects.component';

const routes: Routes = [
  {path: '', component: HomeComponent, children: [
    {path: 'about-me', component: AboutMeComponent},
    {path: 'projects', component: ProjectsComponent},
    //{path: 'contact-me', component: ContactMeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
