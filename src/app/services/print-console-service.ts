import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class ConsolePrintService {

  private messageSource = new BehaviorSubject('Start writing commands');
  currentMessage = this.messageSource.asObservable();
  constructor() { }

  print(message: string) {
    this.messageSource.next(message);
  }

}
