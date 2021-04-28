import { Injectable } from '@angular/core';
import { Message } from 'primeng//api';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  private messagesSource: Subject<Message[]> = new Subject<Message[]>();
  private messages: Message[] = [];

  public message$ = this.messagesSource.asObservable();

  constructor() {}

  addMessage(...item: Message[]) {
    this.messages.push(...item);
    this.messagesSource.next(this.messages);
  }
  
  clear() {
    this.messages = [] as Message[];
  }
}
