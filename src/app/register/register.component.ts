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

  ngOnInit() {
  }

  
  Register(uname: string, p : string)
  {
    var output = this.service.Register(uname, p);
    //if(output == true)
    {
      this.router.navigate(['/login']);
    }
  }



}
