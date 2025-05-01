import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class agendaService{
    
    apiUrl = 'http://localhost:5185/api/Agenda';
    
    httpOpitions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
           
            
        })
    }


    constructor(
        private httpClient: HttpClient
    ){ }

    public ListarAgenda(agenda:  string): Observable<any>{
        return this.httpClient.get<any>(this.apiUrl, this.httpOpitions);
    }

    public CadastrarAgenda(agenda: any): Observable<any>{
        return this.httpClient.post<any>(this.apiUrl, agenda, this.httpOpitions);
    }

    }