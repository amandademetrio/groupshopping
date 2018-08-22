import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-my-rooms',
  templateUrl: './my-rooms.component.html',
  styleUrls: ['./my-rooms.component.css']
})
export class MyRoomsComponent implements OnInit {
  user_email = localStorage.getItem('email');
  new_room = {name:""};
  errors = {};
  all_rooms = [];
  joined_rooms = [];

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    console.log(localStorage)
    if (!localStorage.getItem('loggedIn')) {
      this._router.navigate(['/home']);
    }
    else {
      this.getAllRooms();
      this.getJoinedRooms();
    }
  }

  getAllRooms() {
    let observable = this._httpService.getRooms(this.user_email);
    observable.subscribe(data=>{
      if (data['status'] == 500) {
        this.errors = data['errors']['errors']
        console.log(this.errors)
      }
      else {
        this.all_rooms = data['rooms'];
      }
    })
  }

  getJoinedRooms() {
    let observable = this._httpService.getJoinedRooms(this.user_email);
    observable.subscribe(data=>{
      this.joined_rooms = data['rooms']
    })
  }

  createRoom() {
    this.new_room['email'] = this.user_email;
    let observable = this._httpService.createRoom(this.new_room);
    observable.subscribe(data=>{
      if (data['status'] == 500) {
        this.errors = data['errors']['errors']
        console.log(this.errors)
      }
      else {
        console.log(data)
        this.new_room = {name:""};
        this.getAllRooms();
      }
    })
  }

}
