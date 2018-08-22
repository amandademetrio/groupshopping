import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  new_user = {};
  log_user = {};
  errors = {};

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.new_user = {name:"",email:"",password:"",c_password:""};
    this.log_user = {email:"",password:""};
    this.errors = {};
  }

  register_user(){
    console.log("running register user")
    let observable = this._httpService.createUser(this.new_user)
    observable.subscribe(data=>{
      if (data['status'] == 500) {
        this.errors = data['errors']['errors']
        console.log(this.errors)
      }
      else {
        localStorage.setItem('loggedIn','true')
        localStorage.setItem('email',data['user']['email'])
        this._router.navigate(['/rooms']);
      }
    })
  }

  login_user(){
    let observable = this._httpService.logUser(this.log_user)
    observable.subscribe(data=>{
      if (data['status'] == 500) {
        this.errors = data['errors']['errors']
        console.log(this.errors)
      }
      else {
        localStorage.setItem('loggedIn','true')
        localStorage.setItem('email',data['user']['email'])
        this._router.navigate(['/rooms']);
      }
    })
  }

}
