import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-applications',
  imports: [],
  templateUrl: './manage-applications.html',
  styleUrl: './manage-applications.css',
})
export class ManageApplications {

  constructor(private router: Router){

  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
