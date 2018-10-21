import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import {FileUploadModule} from 'ng2-file-upload';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,FileUploadModule,FormsModule,
    RouterModule.forRoot([
      {
        path:"",
        redirectTo:"login",
        pathMatch:"full"
      },

 
  // {
  //   path:"resadd",
  //   loadChildren:"./resadd/resadd.module#ResaddModule"
  // },
{
  path:"signup",
  loadChildren:"./signup/signup.module#SignupModule"
},
{
  path:"login",
  loadChildren:"./login/login.module#LoginModule"
},
{
path:"pro",
loadChildren:"./pro/pro.module#projectModule"}
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
