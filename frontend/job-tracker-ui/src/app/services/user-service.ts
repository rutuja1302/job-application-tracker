import { HttpClient } from '@angular/common/http';
import { Service, inject } from '@angular/core';

@Service()
export class UserService {
    private baseUrl : string = 'http://localhost:8081';
    private httpClient = inject(HttpClient);
    constructor(){}

    createNewUser(data: any){
        return this.httpClient.post(this.baseUrl+'/register', data);
    }
}
