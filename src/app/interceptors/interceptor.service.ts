// Los interceptores se tienen que declarar en el app.module.ts
// Para que Angular los pueda considerar como un providers
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Se tiene que implementar el HttpIntercerptor a la clase
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Interceptor en acción');

    let headers = new HttpHeaders({
      token: 'abc123.xyz987'
    });

    // La req se puede clonar antes de ser manipulada
    // Una vez manipulada no se puede volver a llamar
    let reqClone = req.clone({ headers });

    return next.handle(reqClone).pipe(catchError(this.capturarError));
  }

  // Cualquier error en una peticion se captura
  capturarError(error: HttpErrorResponse) {
    console.warn(error);
    return throwError(`Capturando el error: ${error.message}`);
  }
}
