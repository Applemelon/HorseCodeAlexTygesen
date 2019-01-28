import { Component, OnInit } from '@angular/core';
import {MessageService} from '../shared/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  messages: any[];
  latest: any;
  constructor(private messageService: MessageService) {
    this.messageService.getMessagesLastByLimit(9).subscribe(messages => {
      this.messages = messages;
      this.latest = messages[0];
    });
  }

  ngOnInit() {
  }

  convertMessage(message: string): string {
    return this.messageService.convertToText(message);
  }

}
