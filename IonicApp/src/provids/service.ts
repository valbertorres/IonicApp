import { Injectable } from '@angular/core'; 
import { Http } from '@angular/http';

@Injectable()
export class WebService{

    private url = 'http://api.openweathermap.org/data/2.5/weather?APPID=e81f21c97491ec49e9364567ce16d2b3&lang=pt&units=metric&q=';

    constructor( private http : Http){}

    buscaPrevisao(cidade : string ){
        return this.http.get(this.url+cidade)
        .toPromise()
        .then(res=> res.json());
    }
}