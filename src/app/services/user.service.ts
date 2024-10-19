import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public isLogin(){
    return sessionStorage.getItem('accessToken')!=null;
  }

  public getToken(){
    return sessionStorage.getItem('accessToken')||'';
  }
}
