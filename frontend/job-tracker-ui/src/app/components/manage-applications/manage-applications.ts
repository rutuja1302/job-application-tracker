import { Component, inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppCardBody } from '../../model/AppCardBody';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
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
  applicationService = inject(ApplicationService);
  displayedColumns: string[] = ['companyName', 'jobTitle', 'location','status', 'action'];
  dataSource = new MatTableDataSource<Application>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router: Router){}

  ngOnInit(){
    this.getApplications();
    this.loadCardContent();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getApplications(){
    this.applicationService.getApplications().subscribe((response: any) => {
      this.dataSource.data = response;
      console.log(this.dataSource);
    })
  }

  loadCardContent(){
    this.cardContentList = [
      new AppCardBody('Total Applications', 3, 'Applications submitted','paper-plane-regular-full.svg'),
      new AppCardBody('Interviews', 3, 'Interview Invitations','calendar-regular-full.svg'),
      new AppCardBody('Offers', 3, 'Job Offers received','arrow-trend-up.svg'),
      new AppCardBody('Response Rate', 3, 'Overall response rate','signal-solid-full.svg')
    ]
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
