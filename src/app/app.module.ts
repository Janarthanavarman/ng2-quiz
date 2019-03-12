import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';
import { HighlightDirective } from './highlight.directive';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';
import { AppRoutingModule } from './/app-routing.module';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { RxjsComponent } from './rxjs/rxjs.component';



@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    HighlightDirective,
    LoginComponent,
    UploadComponent,
    RegisterComponent,
    RxjsComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
