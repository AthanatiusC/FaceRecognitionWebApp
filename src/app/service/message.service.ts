import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public messages=[]

  constructor() { }
  Notify(message:string) {
    this.messages.push(message)
    setTimeout(() => {
      this.messages.pop()
    }, 3000);
  }
}
