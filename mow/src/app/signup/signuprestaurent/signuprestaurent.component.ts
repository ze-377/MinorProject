import { Component, OnInit ,ViewChild} from '@angular/core';
import{HttpClient}from "@angular/common/http"
@Component({
  templateUrl: './signuprestaurent.component.html',
  styleUrls: ['./signuprestaurent.component.css']
})
export class SignuprestaurentComponent implements OnInit {
  @ViewChild('restaurentsignupForm') form;
  constructor(private http:HttpClient) { }
  signup(data){
    this.http.post("http://localhost:6363/restsign",{
    districtname:data.districtname,
    email:data.email,
    phone:data.phone,
    password:data.password,
   
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
