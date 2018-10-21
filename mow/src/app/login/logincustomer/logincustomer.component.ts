import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  templateUrl: './logincustomer.component.html',
  styleUrls: ['./logincustomer.component.css']
})
export class LogincustomerComponent implements OnInit {
  flag:Boolean=false

  constructor(private http:HttpClient) { }
  login(data){
    this.http.post("http://localhost:6363/login",{
      email:data.email,
      password:data.password
    }).subscribe((res:any)=>{
      console.log(res.msg)
    })
  }
  s(){
    this.flag=true

  }
  ngOnInit() {
  }

}
