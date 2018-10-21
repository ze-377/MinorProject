import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-showproject',
  templateUrl: './showproject.component.html',
  styleUrls: ['./showproject.component.css']
})
export class ShowprojectComponent implements OnInit {
  obj;flag;
  constructor(private http: HttpClient) {
    this.http.get("http://localhost:6363/showproject").subscribe((res:any)=>{
      this.obj=res.data
    })
    setTimeout(()=>{
      console.log(this.obj)
      this.flag=1
    },1 )
   }

  ngOnInit() {
  }

}