import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterceptorService } from './interceptors/interceptor.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [
    {
      // Configuracion basica de un interceptor
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true // Para estar pendiente de todas las peticiones
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
