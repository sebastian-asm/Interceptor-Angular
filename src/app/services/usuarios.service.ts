import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  getUser() {
    // Insertando parametros a la peticion de la url
    let params = new HttpParams().append('page', '1');

    // Enviando headers a la peticion
    // Tambien se puede hacer a traves de un interceptor (servicio)
    // Para obtener todas las peticiones http
    // let headers = new HttpHeaders({
    //   'token': 'abc123.xyz987'
    // });

    return (
      this.http
        // .get('https://reqres.in/api/user', { params, headers })
        .get('https://reqres.in/api/user', { params })
        .pipe(pluck('data'))
    );
  }
}
