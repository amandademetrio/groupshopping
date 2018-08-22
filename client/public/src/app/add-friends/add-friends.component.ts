import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.css']
})
export class AddFriendsComponent implements OnInit {
  room_id ;
  errors = {};
  room = {};
  new_user = {email:""};
  success_alert = false;
  email_error_alert = false;
  room_update_fail = false;

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
      this._route.params.subscribe((params: Params) => {
        this.room_id = params.id;
        this.getRoomInfo();
    });
    }

  getRoomInfo() {
    let observable = this._httpService.findRoom(this.room_id);
    observable.subscribe(data=>{
      if (data['status'] == 500) {
        this.errors = data['errors']['errors']
        console.log(this.errors)
      }
      else {
        this.room = data['room'];
        console.log(this.room)
      }
    })
  }

  updateRoomInfo() {
    let observable = this._httpService.findUser(this.new_user['email']);
    observable.subscribe(data=>{
      if (data['status'] == 500||data['user']==null) {
        console.log(this.errors)
        this.new_user = {email:""};
        this.email_error_alert = true;
        this.success_alert = false;
        this.room_update_fail = false;
      }
      else {
      this.new_user = data['user'];
      let observable2 = this._httpService.updateRoom(this.room_id,this.new_user);
      observable2.subscribe(data2=>{
        if (data2['status'] == 500) {
          console.log(this.errors)
          this.new_user = {email:""};
          this.email_error_alert = false;
          this.success_alert = false;
          this.room_update_fail = true;
        }
        else {
          console.log(data2)
          this.new_user = {email:""};
          this.success_alert = true;
          this.email_error_alert = false;
          this.room_update_fail = false;
          this.getRoomInfo();
        }
      })

    }



    })

  }
  
}
