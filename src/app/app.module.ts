import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { T101Component } from './t101/t101.component';
import {HttpClientModule} from '@angular/common/http';

import { Customdirective1Directive } from './CustomDirectives/customdirective1.directive';
import { ChangeDetectionParentComponent } from './ChangeDetection/change-detection-parent/change-detection-parent.component';
import { ChangeDetectionChildComponent } from './ChangeDetection/change-detection-child/change-detection-child.component';
import { SearchPipeImplComponent } from './search-pipe-impl/search-pipe-impl.component';
import { SearchPipePipe } from './pipes/search-pipe.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { AsyncPipeImplComponent } from './async-pipe-impl/async-pipe-impl.component';
import { LoginPageComponent } from './Dashboard/login-page/login-page.component';
import { LoginDetailsComponent } from './Dashboard/login-details/login-details.component';
import { ReactiveformComponent } from './forms/reactiveform/reactiveform.component';
@NgModule({
  declarations: [
    AppComponent,
    T101Component,
    LoginPageComponent,
    LoginDetailsComponent,
    Customdirective1Directive,
    ChangeDetectionParentComponent,
    ChangeDetectionChildComponent,
    SearchPipeImplComponent,
    SearchPipePipe,
    NavigationComponent,
    AsyncPipeImplComponent,
    ReactiveformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [Customdirective1Directive],
  bootstrap: [AppComponent]
})
export class AppModule { }
