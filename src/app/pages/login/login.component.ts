import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = new FormControl
  password = new FormControl

  constructor(private auth:AuthenticationService,private route:Router,private messanger:MessageService) { }

  ngOnInit(): void {
    console.log(localStorage.getItem("auth_key"))
  }

  Login(event) {
    this.auth.Login(event.target.username.value, event.target.password.value).subscribe(res => {
      localStorage.setItem("name",res.data.name)
      localStorage.setItem("role",res.data.role)
      localStorage.setItem("auth_key",res.data.token)
      this.messanger.Notify("Login success!")
      this.route.navigate(["home"])
    }, err => {
        // console.log()
        // this.messanger.Notify("Incorrect password or username")
        this.messanger.Notify(err['message'])
        // console.log(err['message'])

    })
  }
  
  Logout() {
    this.auth.Logout()
  }
}
