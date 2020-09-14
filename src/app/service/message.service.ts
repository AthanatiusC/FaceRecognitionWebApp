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
      document.getElementById("message").style.visibility = "visible"
      this.messages.pop()
    }, 3000);
  }
}
