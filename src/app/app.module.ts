import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
        
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';

//Cambiar el local de la app
import localEs from "@angular/common/locales/es-MX";
import localIt from "@angular/common/locales/it";
import { registerLocaleData } from "@angular/common";

registerLocaleData(localEs);
registerLocaleData(localIt);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    VentasModule,
    AppRouterModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue:'es-MX' }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
