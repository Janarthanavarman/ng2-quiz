import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuizComponent } from './quiz/quiz.component';
import { UploadComponent} from './upload/upload.component';
import { LoginComponent} from './login/login.component';
import{AuthGuard} from './auth.guard';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', pathMatch:'full',redirectTo:'login' },
    {path: 'quiz', canActivate : [AuthGuard], component:  QuizComponent},
    {path: 'upload', component:  UploadComponent },
    {path: 'login', component:  LoginComponent  },
    {path:'register', component:RegisterComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
