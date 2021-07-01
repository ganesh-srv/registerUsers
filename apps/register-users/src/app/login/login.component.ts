
import { Input, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'register-users-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public login: boolean | undefined;
  constructor() {
    this.login = true;
  }

  ngOnInit(): void {

  }

  flicker() {
    this.login = !this.login;
  }
}
