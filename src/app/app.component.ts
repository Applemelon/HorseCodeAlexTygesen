import { Component } from '@angular/core';
import {MessageService} from './shared/message.service';
import {Observable} from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Horse App';
  messages: any[];
  messagesPaged: Observable<any[]>;
  latest: any;
  message = '';
  humanReadableMessage = '';
  time: number;
  constructor(private messageService: MessageService) {
    document.title = "Horse Messaging Site";
    this.messageService.getMessagesLastByLimit(5).subscribe(messages => {
      this.messages = messages;
      this.latest = messages[0];
    });
  }

  convertMessage(message: string): string {
    return this.messageService.convertToText(message);
  }




}
