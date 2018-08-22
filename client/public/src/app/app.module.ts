import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import { LoginComponent } from './login/login.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { MyRoomsComponent } from './my-rooms/my-rooms.component';
import { FormsModule } from '@angular/forms';
import { AddFriendsComponent } from './add-friends/add-friends.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    LoginComponent,
    MyProductsComponent,
    MyRoomsComponent,
    AddFriendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
