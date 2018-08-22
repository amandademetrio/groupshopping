import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  product_add = false;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params.id);
  });
  }

  openAddProduct() {
    if (this.product_add == true) {
      this.product_add = false;
    }
    else {
      this.product_add = true;
    }
  }

  addProduct() {
    console.log("clicked on add product")
  }

}
