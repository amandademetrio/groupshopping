import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent implements OnInit {

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    console.log(localStorage)
    if (!localStorage.getItem('loggedIn')) {
      this._router.navigate(['/home']);
    }
    else {
      this.findCurrentUser();
    }
  }

  findCurrentUser() {
    console.log("running find current user")
  }

}
