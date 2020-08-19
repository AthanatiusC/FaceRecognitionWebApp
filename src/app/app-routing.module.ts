import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

// import { IndexComponent } from "./pages/index/index.component";
// import { ProfilepageComponent } from "./pages/examples/profilepage/profilepage.component";
// import { RegisterpageComponent } from "./pages/examples/registerpage/registerpage.component";
// import { LandingpageComponent } from "./pages/examples/landingpage/landingpage.component";
import { HomeComponent } from "./pages/home/home.component"
import { DatahubComponent } from './pages/datahub/datahub.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { SettingComponent } from './pages/setting/setting.component';
import { AuthGuardService } from './service/auth-guard.service';
import { LoginComponent } from './pages/login/login.component';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full",canActivate:[AuthGuardService] },
  { path: "home", component: HomeComponent ,canActivate:[AuthGuardService] },
  { path: "datahub", component: DatahubComponent ,canActivate:[AuthGuardService] },
  { path: "attendance", component: AttendanceComponent ,canActivate:[AuthGuardService] },
  { path: "setting", component: SettingComponent ,canActivate:[AuthGuardService] },
  { path: "login", component: LoginComponent ,canActivateChild:[AuthGuardService]},
  { path: "index", component: IndexComponent ,canActivateChild:[AuthGuardService]},
  { path: "*", redirectTo: "home" },
  // { path: "profile", component: ProfilepageComponent ,canActivate:[AuthGuardService] },
  // { path: "register", component: RegisterpageComponent ,canActivate:[AuthGuardService] },
  // { path: "landing", component: LandingpageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: []
})
export class AppRoutingModule {}
