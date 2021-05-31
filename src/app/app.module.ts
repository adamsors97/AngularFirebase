import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { HttpReqInterceptor } from './utils/http.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire'
import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ErrorComponent,
    LoginComponent,
    HomeComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpReqInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
