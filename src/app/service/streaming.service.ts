import { Injectable, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class StreamingService{

  constructor(private messanger:MessageService,private socket: Socket) { }

  getAllStream() {
    this.socket.emit("multi-stream")
    return this.socket.fromEvent("multi-stream-recieve")
  }
  
  getSingleStream(channel: string) {
    this.socket.emit("stream",channel)
    return this.socket.fromEvent("serverstream"+channel)
  }

  getCameraInfo(){
    return this.socket.fromEvent("online_cameras")
  }

  getMessage() {
    this.socket.fromEvent("message").subscribe((message:string)=> {
      this.messanger.Notify(message)
    })
  }
}
