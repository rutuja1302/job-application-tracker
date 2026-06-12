import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user-service';
import { User } from '../../model/User';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-registeration',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './registeration.html',
  styleUrl: './registeration.css',
})
export class Registeration {
  registrationForm: FormGroup;
  private userService = inject(UserService);
  newUser!: User;

  constructor(private fb: FormBuilder){
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  register(){
    if(this.registrationForm.valid){
      this.newUser = new User(this.registrationForm.value.username, this.registrationForm.value.email, this.registrationForm.value.password);
      this.userService.createNewUser(this.newUser).subscribe((response) =>{
        alert('User registered successfully!');
      });
    }else{
      alert('Please fill mandatory fields!');
    }
  }

}
