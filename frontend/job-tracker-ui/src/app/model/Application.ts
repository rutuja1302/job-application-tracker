import { Status } from "./Status";

export class Application {
    applicationId: number;
    jobTitle: string;
    companyName: string;
    jobLink: string;
    status: Status;
    salary: number;
    location: string;
    contactPerson: string;
    notes: string;

    constructor(applicationId: number,
    jobTitle: string,
    companyName: string,
    jobLink: string,
    status: Status,
    salary: number,
    location: string,
    contactPerson: string,
    notes: string){
        this.applicationId=applicationId;
        this.jobTitle=jobTitle;
        this.companyName=companyName;
        this.jobLink=jobLink;
        this.status=status;
        this.salary=salary;
        this.location=location;
        this.contactPerson=contactPerson;
        this.notes=notes;
    }
}