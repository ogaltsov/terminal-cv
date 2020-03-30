import { Component, OnInit } from '@angular/core';
import {TerminalOutputWindow} from '../model/terminal-output-window';
import {ConsolePrintService} from '../services/print-console-service';

@Component({
  selector: 'app-console-output-layout',
  templateUrl: './console-output-layout.component.html',
  styleUrls: ['./console-output-layout.component.css'],
})
export class ConsoleOutputLayoutComponent implements OnInit {

  consoleOutput: TerminalOutputWindow = {
    name: 'custom-console',
    message: '                            .__     __                    \n' +
      '  ____    ______ __  |  |  _/  |_ ____________     __\n' +
      ' /   _  \\ / ___  \\__  \\ |  |  \\   __/  ___/    _   \\ \\   /  /\n' +
      '( <_> / /_/   / __   \\|  |__|  |_ \\___ (  <_> \\  \\/  / \n' +
      ' \\____/\\___   (____  |____|___|/ ___\\_____/ \\__ /  \n' +
      '        /_____/                '
  };

  constructor(private messageService: ConsolePrintService) {
    this.messageService.currentMessage.subscribe(message => {
      console.log('consumer:' + message);
      this.consoleOutput.message += '\n\r';
      this.consoleOutput.message += message;
    });
  }

  ngOnInit(): void {
  }

}
