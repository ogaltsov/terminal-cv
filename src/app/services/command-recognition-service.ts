import {Injectable} from '@angular/core';
import {ConsolePrintService} from './print-console-service';


@Injectable()
export class CommandRecognitionService {

  runCommand(command: string) {
    // print command
    this.consolePrintService.print(command);
    // parse command
    // invoke specific service
    // print output to terminal
    this.consolePrintService.print('command execution is not implemented');
  }

  constructor(private consolePrintService: ConsolePrintService) {
  }

}
