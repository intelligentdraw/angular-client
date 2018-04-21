import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
@Injectable()
export class ServerService{
    constructor(private http: HttpClient){}
    
    //headers = new HttpHeaders().set("Access-Control-Allow-Origin", "*");
            
    get(url:string){
        return this.http.get(url, {
            observe:'body',
            responseType: 'json'
        }); 
    }
    
    put(resource:{}, url:string){
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json; charset=utf-8').append(
            "Access-Control-Allow-Origin", "*")
            .append("X-Requested-With", "*").append("Csrf-Token", "nocheck");
        return this.http.put<{}>(url, resource, {headers:headers});
    }
    
    getMultiple(url1: string, url2: string){
        return Observable.forkJoin(
            this.http.get(url1, {observe: 'response', responseType:'blob'}),
            this.http.get(url2, {observe: 'body'}),
        );
    }
}