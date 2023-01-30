import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JlintComponent } from './jlint/jlint.component';
import { EncoderComponent } from './encoder/encoder.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PrettyPrintJsonPipe } from './pretty-print-json.pipe';
import { InputValidationDirective } from './shared/input-validation/input-validation.directive';
import { PaginateComponent } from './paginate/paginate.component';
import { ContactComponent } from './contact/contact.component';
import { HighlightDirective } from './highlight.directive';
import { PracticeThingsComponent } from './practice-things/practice-things.component';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';
import { JwtDecoderComponent } from './jwt-decoder/jwt-decoder.component';
import { HttpReqInterceptor } from './http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JlintComponent,
    EncoderComponent,
    NavBarComponent,
    PrettyPrintJsonPipe,
    InputValidationDirective,
    PaginateComponent,
    ContactComponent,
    HighlightDirective,
    PracticeThingsComponent,
    ContactReactiveComponent,
    JwtDecoderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpReqInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
