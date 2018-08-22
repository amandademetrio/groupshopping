import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  createUser(user){
    return this._http.post('/users',user)
  }

  logUser(user){
    return this._http.post('/users/log',user)
  }

  findUser(email) {
    return this._http.get(`/users/${email}`);
  }

  createRoom(room) {
    return this._http.post('/rooms',room)
  }

  getRooms(email) {
    return this._http.get(`/rooms/${email}`)
  }

  findRoom(id) {
    return this._http.get(`/rooms/get/${id}`)
  }

  updateRoom(id,new_user) {
    return this._http.put(`/rooms/update/${id}`,new_user);
  }

  getJoinedRooms(email) {
    return this._http.get(`/rooms/joined/${email}`)
  }

}
