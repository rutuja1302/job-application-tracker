import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registeration',
  imports: [FormsModule],
  templateUrl: './registeration.html',
  styleUrl: './registeration.css',
})
export class Registeration {
  username: string = "";
  email: string = "";
  password: String = "";

  register(){
    console.log(this.username+" "+this.email+" "+this.password);
  }

}
