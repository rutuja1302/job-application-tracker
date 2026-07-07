import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { AuthService } from './auth.service';

@Service()
export class ApplicationService {
    private baseUrl : string = 'http://localhost:8081';
    private httpClient = inject(HttpClient);
    constructor(){}

    getApplications() {
        return this.httpClient.get(this.baseUrl + '/applications');
    }

    getStatuses() {
        return this.httpClient.get(this.baseUrl + '/statusList');
    }

    createApplication(data: any){
        return this.httpClient.post(this.baseUrl+'/create-application', data);
    }

    updateApplication(data: any){
        return this.httpClient.put(this.baseUrl+'/update-application', data);
    }
}
