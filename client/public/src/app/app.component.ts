import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';

  constructor(private _router: Router,
    private _httpService: HttpService){};

  ngOnInit() {
    console.log(localStorage)
    if (localStorage.getItem('loggedIn')) {
      this._router.navigate(['/rooms']);
    }
    else {
      this._router.navigate(['/home']);
    }
  }

  logoutUser() {
    console.log("logging user out")
    localStorage.clear();
    console.log(localStorage)
    this._router.navigate(['/home']);
  }

}
