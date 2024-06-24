import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginAuthGuard } from './guards/login-auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {
    path:'pages', 
    loadChildren(){
      return import('./pages/pages.module').then(m => m.PagesModule);
    },
    canActivate: [loginAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
