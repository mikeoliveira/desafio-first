import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ManagerCheckInOutComponent } from './manager-check-in-out/manager-check-in-out.component';
import { SharedModule } from './share/share.module';
import { DotToCommaPipe } from './share/pipes/dot-to-comma.pipe';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, ManagerCheckInOutComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, SharedModule],
  providers: [DotToCommaPipe],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
