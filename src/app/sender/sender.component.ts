import { Component, OnInit } from '@angular/core';
import {MessageService} from '../shared/message.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss']
})
export class SenderComponent implements OnInit {

  message = '';
  humanReadableMessage = '';
  time: number;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  convertMessage(message: string): string {
    return this.messageService.convertToText(message);
  }

  send() {
    const time = new Date();
    this.messageService.addMessage(time, this.message.trim() ).then(done => {
      console.log('saved');
    }, err => {
      console.log(err);
    });
    this.clear();
  }

  morse(active) {
    if (active) {
      this.time = (new Date()).getTime();
    } else {
      const clickTime = (new Date()).getTime() - this.time;
      if (clickTime > 120) {
        this.message += '-';
      } else {
        this.message += '.';
      }
      this.time = -1;
    }
    this.humanReadableMessage = this.messageService.convertToText(this.message);
  }

  space() {
    this.message += '/';
    this.humanReadableMessage = this.messageService.convertToText(this.message);
  }

  next() {
    this.message += ' ';
    this.humanReadableMessage = this.messageService.convertToText(this.message);
  }

  clear() {
    this.message = this.message.substring(0, this.message.length - 1);
    this.humanReadableMessage = this.messageService.convertToText(this.message);
  }
}
