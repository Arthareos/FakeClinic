import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { appRoutingModule } from './app.routing';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AlertComponent } from './_components';
import { LandingDoctorComponent } from './landing/landing-doctor/landing-doctor.component';
import { LandingPatientComponent } from './landing/landing-patient/landing-patient.component';
import { AppointmentsComponent } from './landing/landing-doctor/appointments/appointments.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DoctorInboxComponent } from './landing/landing-doctor/doctor-inbox/doctor-inbox.component';
import { TicketsOverviewComponent } from './landing/landing-patient/tickets-overview/tickets-overview.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AlertComponent,
        LandingDoctorComponent,
        LandingPatientComponent,
        AppointmentsComponent,
        NavbarComponent,
        DoctorInboxComponent,
        TicketsOverviewComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };