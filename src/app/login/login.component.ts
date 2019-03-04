import { Component, OnInit } from '@angular/core';
import { RouterModule , Router } from '@angular/router';
import{GuardService} from '../guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    msg :string;
  constructor(private router:Router,private service:GuardService) { }

  ngOnInit() {
  }

  check(uname: string, p : string)
  {
    var output = this.service.checkusernameandpassword(uname, p);
    if(output == true)
    {
      this.router.navigate(['/quiz']);
    }
    else{
        this.msg ='Invalid username or password';
    }
  }

}
