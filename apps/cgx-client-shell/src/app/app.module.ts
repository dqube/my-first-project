import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { MdReviewModule } from 'libs/md-review/src/public_api';
import { FormlyModule } from '@cgx-forms/core';
import { CGXDynamicFormModule } from '@cgx-forms/dynamic';
import { LoggerModule, CgxLoggerLevel } from '@cgx-common/logger';
import { ConfigModule } from '@cgx-common/config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ConfigModule.forRoot({ state:'development'}),
    HttpClientModule,
    FormlyModule.forRoot(),
    LoggerModule.forRoot({serverLoggingUrl: '/api/logs', level: CgxLoggerLevel.DEBUG, serverLogLevel: CgxLoggerLevel.ERROR}),
    CGXDynamicFormModule,
    MdReviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
