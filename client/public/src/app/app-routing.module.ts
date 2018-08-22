import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomComponent } from './room/room.component';
import { LoginComponent } from './login/login.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { MyRoomsComponent } from './my-rooms/my-rooms.component';
import { AddFriendsComponent } from './add-friends/add-friends.component';

const routes: Routes = [
  { path: 'home',component: LoginComponent },
  { path: 'rooms/:id',component: RoomComponent },
  { path: 'rooms',component: MyRoomsComponent },
  { path: 'products',component: MyProductsComponent },
  { path: 'add_friends/:id',component: AddFriendsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
