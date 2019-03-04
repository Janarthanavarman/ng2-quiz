import { Injectable } from '@angular/core';
import { RegisterComponent } from './register/register.component';

@Injectable({
  providedIn: 'root'
})
export class GuardService {
UserCredential :User[]=[];
  constructor() { }

  checkusernameandpassword(uname: string, pwd : string)
  {
    console.log(this.UserCredential);
    if( this.UserCredential.find(x=> x.Pwd==pwd && x.Usernamme == uname)){
      localStorage.setItem('username',uname);
      return true;
    }
    else{
      localStorage.removeItem("username");
      return false;
    }
  }


Register(name:string ,pwd:string){

  this.UserCredential.push({
    Usernamme:name,Pwd:pwd
  })
}
}


class User{
Usernamme:string;
Pwd :string;
}