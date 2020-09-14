import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { StreamingService } from 'src/app/service/streaming.service';
import { map } from 'rxjs/operators';
import { getCalendarFormat } from 'ngx-bootstrap/chronos/moment/calendar';
import { csLocale } from 'ngx-bootstrap/chronos';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.scss']
})
export class StreamComponent implements OnInit {

  constructor(private streaming: StreamingService) { }
  private frame: any
  private channelid = []
  ngOnInit(): void {
    // this.streaming.getCameraInfo().subscribe((res:object) => {
    //   for (const cam in res) {
    //     this.streaming.getSingleStream(cam).subscribe(res => {
    //       this.frame = res
    //     })
    //   }
    // })
    this.streaming.getCameraInfo().subscribe(a => {
      this.channelid.push(a)
    })
    this.streaming.getAllStream().subscribe((data) => {
      this.frame = data
      for (let i = 0; i < this.channelid.length; i++){
        this.frame[i] = "data:image/jpeg;base64,"+this.frame[i]
      }
    })
    
  }

}
