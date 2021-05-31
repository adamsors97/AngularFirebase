import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { FirstComponent } from './first/first.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { SecondComponent } from './second/second.component';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'first', component: FirstComponent, canActivate: [AuthGuard]},
  {path: 'second', component: SecondComponent, canActivate: [AuthGuard]},
  {path: 'store', component: StoreComponent, canActivate: [AuthGuard]},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
