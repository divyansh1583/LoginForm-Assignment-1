import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  title="DC";
  isSubmitted=false;
  isSelected=false;
  selectedsports='';
  list=["Male","Female","Other"];
 loginForm=new FormGroup({
  
    email: new FormControl("", Validators.required),
    password: new FormControl (""),
    
});
  saveForm(){
    localStorage.setItem('login_token','token');
    console.log(this.loginForm.value);
    
  }

  // flashSignal(){
  //   this.isSelected=true;
  //   this.selectedsports=this.loginForm.controls.favoriteSport.value!;

  // }
  
}
