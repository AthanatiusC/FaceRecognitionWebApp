import {
  Component,
  OnInit
} from "@angular/core";
import { Router} from '@angular/router';
import { MessageService } from './service/message.service';
import { AuthGuardService } from './service/auth-guard.service';



@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  private routeList: any[]
  private currentActive: any = "Home"
  public Time: Date = new Date();

  constructor(
    private router: Router,
    private messanger: MessageService,
    private auth:AuthGuardService,
  ) { 
    setInterval(() => {
      this.Time = new Date();
    }, 1);
  }
  
  ngOnInit() {
    this.routeList = [
      { name: 'Home', path: '/home', icon: 'icon-atom' },
      { name: 'Attendance', path: '/attendance', icon: 'icon-single-02' },
      { name: 'Data Hub', path: '/datahub', icon: 'icon-molecule-40' },
      { name: 'Setting', path: '/setting', icon: 'icon-settings' },
    ]
  }

  ChangeActiveState(id) {
    if (this.currentActive == null) {
      document.getElementById(id).style.borderLeft = "#00f2c3 solid 2px"
      document.getElementById("icon-"+id).style.color = "#00f2c3"
      this.currentActive = id  
    } else {
      document.getElementById(this.currentActive).style.borderLeft = "0px"
      document.getElementById("icon-"+this.currentActive).style.color = "#dfdfdf"
      document.getElementById(id).style.borderLeft = "#00f2c3 solid 2px"
      document.getElementById("icon-"+id).style.color = "#00f2c3"

      this.currentActive = id  
    }
    this.messanger.Notify("Page loaded")
  }


}
