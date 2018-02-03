import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
@Injectable()
export class ServerService{
    constructor(private http: HttpClient){}
    
    get(url:string){
        return this.http.get(url, {
            observe:'body',
            responseType: 'json'
        }); 
    }
}