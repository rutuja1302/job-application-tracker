import { Component, inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppCardBody } from '../../model/AppCardBody';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { Application } from '../../model/Application';
import { ApplicationService } from '../../services/application-service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Status } from '../../model/Status';

@Component({
  selector: 'app-manage-applications',
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule
],
  templateUrl: './manage-applications.html',
  styleUrl: './manage-applications.css',
})
export class ManageApplications {

  cardContentList: AppCardBody[] = [];
  applicationService = inject(ApplicationService);
  displayedColumns: string[] = ['companyName', 'jobTitle', 'location','status', 'action'];
  dataSource = new MatTableDataSource<Application>();
  statusList: Status[] = [];
  applicationForm: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router: Router, private fb: FormBuilder){
    this.applicationForm = this.fb.group({
      jobTitle: ['', [Validators.required, Validators.min(3)]],
      companyName: ['', [Validators.required, Validators.min(3)]],
      jobLink: [''],
      status: [null, Validators.required],
      salary: [0],
      location: [''],
      contactPerson: [''],
      notes: ['']
    });
  }

  ngOnInit(){
    this.getApplications();
    this.loadCardContent();
    this.getStatusList();
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

  getStatusList(){
    this.applicationService.getStatuses().subscribe((response: any) => {
      this.statusList = response;
      console.log("st: "+this.statusList)
    })
  }

  addApplication(){
    console.log(this.applicationForm);
    this.applicationService.createApplication(this.applicationForm.value).subscribe((response) => {
      console.log(response);
      this.getApplications();
    });
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
