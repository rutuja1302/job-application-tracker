import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppCardBody } from '../../model/AppCardBody';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { Application } from '../../model/Application';
import { ApplicationService } from '../../services/application-service';

@Component({
  selector: 'app-manage-applications',
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
],
  templateUrl: './manage-applications.html',
  styleUrl: './manage-applications.css',
})
export class ManageApplications {

  cardContentList: AppCardBody[] = [];
  applications: Application[] = [];
  applicationService = inject(ApplicationService);
  displayedColumns: string[] = ['companyName', 'jobTitle', 'location','status', 'action'];

  constructor(private router: Router){}

  ngOnInit(){
    this.getApplications();
    this.loadCardContent();
  }

  getApplications(){
    this.applicationService.getApplications().subscribe((response: any) => {
      this.applications = response as Application[];
      console.log(this.applications);
    })
  }

  loadCardContent(){
    this.cardContentList = [
      new AppCardBody('Total Applications', 3, 'Applications submitted'),
      new AppCardBody('Interviews', 3, 'Interview Invitations'),
      new AppCardBody('Offers', 3, 'Job Offers received'),
      new AppCardBody('Response Rate', 3, 'Overall response rate')
    ]
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
