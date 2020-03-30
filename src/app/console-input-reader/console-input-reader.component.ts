import { Component, OnInit } from '@angular/core';
import {CommandRecognitionService} from '../services/command-recognition-service';

@Component({
  selector: 'app-console-input-reader',
  templateUrl: './console-input-reader.component.html',
  styleUrls: ['./console-input-reader.component.css']
})
export class ConsoleInputReaderComponent {

  onEnter(value: string) {
    this.recognitionService.runCommand(value);
  }

  constructor(private recognitionService: CommandRecognitionService) {
  }
}
