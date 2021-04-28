import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/services/message.service';

@Component({
  selector: 'app-message',
  template: '<p-messages [(value)]="messages" class="message-centered"></p-messages>',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  messages;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.message$.subscribe(message => {
      this.messages = message;
    });
  }

}
