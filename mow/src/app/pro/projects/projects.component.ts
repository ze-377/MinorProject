import { Component, OnInit ,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @ViewChild('enterProjects')form;
  constructor(private http:HttpClient) { }
  enterData (data) {
    this.http.post("http://localhost:6363/enterProjects",{

    projectName:data.projectName,
    projectDetails : data.projectDetails,
    projectCode:data.projectCode,
    projectDept : data.projectDept

    }).subscribe((res:any)=>{
      if(res.success){
        console.log(res.msg)
        this.form.reset();
      }
      else{
        console.log(res.msg)
      }
    })
  }

  ngOnInit() {
  }

}
