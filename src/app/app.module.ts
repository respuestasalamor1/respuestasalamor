import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChatComponent } from './layout/chat/chat.component';
import { Trabajo1Component } from './modules/trabajo1/trabajo1.component';
import { Trabajo2Component } from './modules/trabajo2/trabajo2.component';
import { Trabajo3Component } from './modules/trabajo3/trabajo3.component';
import { Trabajo4Component } from './modules/trabajo4/trabajo4.component';
import { ServiciosComponent } from './modules/servicios/servicios.component';
import { BlogComponent } from './modules/blog/blog.component';
import { ContactenosComponent } from './modules/contactenos/contactenos.component';
import { AcercaDeComponent } from './modules/acerca-de/acerca-de.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ChatComponent,
    Trabajo1Component,
    Trabajo2Component,
    Trabajo3Component,
    Trabajo4Component,
    ServiciosComponent,
    BlogComponent,
    ContactenosComponent,
    AcercaDeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    NgbModule,
    NgbAlertModule,
    MDBBootstrapModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
