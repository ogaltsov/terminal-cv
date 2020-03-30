import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsoleOutputLayoutComponent } from './console-output-layout/console-output-layout.component';
import { ConsoleInputReaderComponent } from './console-input-reader/console-input-reader.component';
import {ConsolePrintService} from './services/print-console-service';
import {CommandRecognitionService} from './services/command-recognition-service';

@NgModule({
  declarations: [
    AppComponent,
    ConsoleOutputLayoutComponent,
    ConsoleInputReaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ConsolePrintService, CommandRecognitionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
