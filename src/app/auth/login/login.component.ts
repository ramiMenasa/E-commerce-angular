import { Component } from '@angular/core';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
user=faUser;
pass=faLock;



handleFormSubmit(loginForm :any){
  
  
}

}
