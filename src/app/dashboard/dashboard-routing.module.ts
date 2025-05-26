import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AuthGuard } from '../SharedFolder/AuthGuard/auth.guard';
import { EducationComponent } from './education/education.component';
import { ServiceComponent } from './service/service.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [

  

  { path: 'dashboard', component: DashBoardComponent, canActivate: [AuthGuard] },
  { path: 'education', component: EducationComponent, canActivate: [AuthGuard] },
  { path: 'service', component: ServiceComponent, canActivate: [AuthGuard] },
  { path: 'experience', component: ExperienceComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactComponent, canActivate: [AuthGuard] },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
