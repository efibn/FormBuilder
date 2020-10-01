import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormListComponent } from './components/form-list/form-list.component';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';


@NgModule({
  declarations: [
    AppComponent,
    FormListComponent
  ],
  imports: [
    BrowserModule,
    PortalModule,
    OverlayModule,
    MatSnackBarModule,
    AppRoutingModule
  ],
  exports: [
    PortalModule,
    OverlayModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
