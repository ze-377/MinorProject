import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent} from './projects/projects.component';
import { ShowprojectComponent } from './showproject/showproject.component';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
@NgModule({
    imports: [
      CommonModule,HttpClientModule,FormsModule,
      RouterModule.forChild([{
        path:"",
        redirectTo:"show",
        pathMatch:"full"
      },
    {
      path:"show",
      component:ShowprojectComponent
    },
  {
    path:"project",
    component:ProjectsComponent
  }])
    ],
    declarations: [ProjectsComponent, ShowprojectComponent]
  })
  export class projectModule { }