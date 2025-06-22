import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { EducationComponent } from './education/education.component';
import { ServiceComponent } from './service/service.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    DashBoardComponent,
    EducationComponent,
    ServiceComponent,
    ExperienceComponent,
    ContactComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
