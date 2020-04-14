import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LandingPatientComponent } from './landing/landing-patient/landing-patient.component';
import { LandingDoctorComponent } from './landing/landing-doctor/landing-doctor.component';
import { AppointmentsComponent } from './landing/landing-doctor/appointments/appointments.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPatientComponent,
    LandingDoctorComponent,
    AppointmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
