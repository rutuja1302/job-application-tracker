import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user-service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm: FormGroup;
  userService = inject(UserService);

  constructor(private fb: FormBuilder, private router: Router){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login(){
    if(this.loginForm.valid){
      this.userService.login(this.loginForm.value).subscribe((response) => {
        localStorage.setItem('token', response);
        this.router.navigate(['/manage-applications']);
      },(error) =>{
        console.log(error);
        alert(error.error);
      })
    }else{
      alert('Email and Password are required!');
    }
  }
}
