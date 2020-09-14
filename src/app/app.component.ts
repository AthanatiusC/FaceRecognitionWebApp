import {
  Component,
  OnInit
} from "@angular/core";
import { Router} from '@angular/router';
import { MessageService } from './service/message.service';
import { AuthGuardService } from './service/auth-guard.service';
import { AuthenticationService } from './service/authentication.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    // trigger('fade', [
    //   // ...
    //   state('open', style({
    //     opacity: 1
    //   })),
    //   state('closed', style({
    //     opacity: 0,
    //   })),
    //   transition('open => closed', [
    //     animate('0.3s')
    //   ]),
    //   transition('closed => open', [
    //     animate('0.3s')
    //   ]),
    // ]),
  ]
})
export class AppComponent implements OnInit {
  private routeList: any[]
  private subMenu:any[]
  private currentActive: any = "Home"
  public Time: Date = new Date();

  constructor(
    private router: Router,
    private messanger: MessageService,
    private authguard: AuthGuardService,
    private auth:AuthenticationService
    
  ) { 
    setInterval(() => {
      this.Time = new Date();
    }, 1);
  }
  ngOnInit() {
    this.routeList = [
      { name: 'Home', path: '/home', icon: 'icon-atom' },
      { name: 'Recognition', path: '/attendance', icon: 'icon-single-02' },
      { name: 'Data Hub', path: '/datahub', icon: 'icon-molecule-40' },
      { name: 'Setting', path: '/setting', icon: 'icon-settings' },
    ]
    this.subMenu = [
      { name: 'Profile', action: 'DisplayProfile()', icon: 'icon-single-02' },
      { name: 'Sign out', action: 'LogOut()', icon: 'icon-button-power' },
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
  }

  LogOut() {
    this.auth.Logout()
  }

  subMenuEvent(params) {
    switch (params) {
      case "LogOut()":
        this.LogOut()
        break;
      default:
        break;
    }
  }
}
