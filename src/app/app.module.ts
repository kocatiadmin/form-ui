import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from "ngx-toastr";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AgencyLoginComponent } from './login/agency-login/agency-login.component';
import { FormsModule } from '@angular/forms';
import { AgencyLayoutComponent } from './layouts/agency-layout/agency-layout.component';
import { NavbarModule } from './layouts/shared/navbar/navbar.module';
import { SidebarModule } from './layouts/shared/sidebar/sidebar.module';

@NgModule({
  declarations: [AppComponent, AgencyLoginComponent, AgencyLayoutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 5000
    }),
    NavbarModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
