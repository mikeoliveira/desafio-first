import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DotToCommaPipe } from './pipes/dot-to-comma.pipe';
import { ManagerCheckInOutComponent } from './manager-check-in-out/manager-check-in-out.component';

@NgModule({
  declarations: [AppComponent, DotToCommaPipe, ManagerCheckInOutComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
