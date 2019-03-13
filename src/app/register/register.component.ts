import { Component, OnInit } from '@angular/core';
import { GuardService } from '../guard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service:GuardService,private router:Router) { }
  msg : string ;
  ngOnInit() {
  }

  
  Register(uname: string, p : string)
  {


    if(uname && p){
      this.msg="";
      this.msg = this.service.Register(uname, p);
      if(this.msg.endsWith("success"))
      {
        this.router.navigate(['/login']);
      }

    }
    else
      this.msg ="Incorrect";
  }



}
