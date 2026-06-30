import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class ApplicationService {
    private baseUrl : string = 'http://localhost:8081';
    private httpClient = inject(HttpClient);
    constructor(){}

    getApplications() {
        const token = localStorage.getItem('token');

        const headers = new HttpHeaders({
            Authorization: `Bearer ${token}`
        });
        return this.httpClient.get(this.baseUrl + '/applications', { headers });
    }

    getStatuses() {
        const token = localStorage.getItem('token');

        const headers = new HttpHeaders({
            Authorization: `Bearer ${token}`
        });
        return this.httpClient.get(this.baseUrl + '/statusList', { headers });
    }

    createApplication(data: any){
        const token = localStorage.getItem('token');

        const headers = new HttpHeaders({
            Authorization: `Bearer ${token}`
        });
        return this.httpClient.post(this.baseUrl+'/create-application', data, { headers });
    }
}
