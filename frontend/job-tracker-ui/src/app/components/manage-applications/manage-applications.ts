import { Component, ElementRef, inject, ViewChild } from '@angular/core';
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
import * as bootstrap from 'bootstrap';

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
  applicationsList: Application[] = [];
  statusList: Status[] = [];
  applicationForm: FormGroup;
  mode: 'Add' | 'Edit' = 'Add';
  selectedApplication: any = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('applicationModal') applicationModal!: ElementRef;

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
    this.getStatusList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getApplications(){
    this.applicationService.getApplications().subscribe((response: any) => {
      this.applicationsList = response;
      this.dataSource.data = response;
      this.loadCardContent();
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
    this.applicationService.createApplication(this.applicationForm.value).subscribe((response) => {
      this.closeModal();
      alert('Application created successfully!');
      this.getApplications();
    });
  }

  updateApplication(){
    let application : Application = this.applicationForm.value;
    application.applicationId = this.selectedApplication.applicationId;

    this.applicationService.updateApplication(application).subscribe((response) => {
      this.closeModal();
      alert('Application updated successfully!');
      this.getApplications();
    });
  }

  loadCardContent(){
    let interviews = this.applicationsList.filter(app => app.status.statusId==3).length;
    let offers = this.applicationsList.filter(app => app.status.statusId==4).length;
    let response = Math.floor(((interviews+offers) / this.applicationsList.length) * 100)
    this.cardContentList = [
      new AppCardBody('Total Applications', this.applicationsList.length.toString(), 'Applications submitted','paper-plane-regular-full.svg'),
      new AppCardBody('Interviews', interviews.toString(), 'Interview Invitations','calendar-regular-full.svg'),
      new AppCardBody('Offers', offers.toString(), 'Job Offers received','arrow-trend-up.svg'),
      new AppCardBody('Response Rate', response+'%', 'Overall response rate','signal-solid-full.svg')
    ]
  }

  openModal() {
    this.mode = 'Add';
    this.selectedApplication = null;
    this.applicationForm.reset();
    const modal = new bootstrap.Modal(this.applicationModal.nativeElement);
    modal.show();
  }

  openEditModal(app: any) {
  this.mode = 'Edit';
  this.selectedApplication = app;
  this.applicationForm.patchValue(app);

  const modal = new bootstrap.Modal(this.applicationModal.nativeElement);
    modal.show();
}

  closeModal(){
    this.selectedApplication = null;
    this.applicationForm.reset();

    const modalElement = this.applicationModal.nativeElement;
    const modal = bootstrap.Modal.getInstance(modalElement);

  if (modal) {
    modal.hide();
  }
  }

compareStatus(o1: any, o2: any): boolean {
  return o1 && o2 ? o1.statusId === o2.statusId : o1 === o2;
}

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
