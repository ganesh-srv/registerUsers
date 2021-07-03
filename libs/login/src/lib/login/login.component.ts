
import { Input, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
@Component({
  selector: 'register-users-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public login: boolean | undefined;
  public createUserForm: any;
  public loginForm: any;
  public errorMessage: string | undefined;

  constructor(private readonly router: Router, private loginService: LoginService) {
    this.login = true;
  }

  ngOnInit(): void {
    this.createUserForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(null),
      userName: new FormControl(null),
      password: new FormControl(null),
      securityQuestion: new FormControl()
    });

    this.loginForm = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null)
    });
    // this.createUserForm = this.fb.group({
    //   firstName: new FormControl(),
    //   lastName: new FormControl(null),
    //   userName: new FormControl(null),
    //   password: new FormControl(null),
    //   securityQuestion:new FormControl()

    // });
  }

  flicker() {
    this.login = !this.login;
  }

  onCreateUser() {
    console.log("hui--->>", this.createUserForm.value);
    this.loginService.createUsers(this.createUserForm.value).subscribe((res) => {
      if (res.isSuccess) {
        this.login = true;
        // this.router.navigate(['home']);
        console.log("result--->>", res);
      }
    });
    this.createUserForm.reset();
  }


  onLogin() {
    console.log("in login");

    this.loginService.checkUser(this.loginForm.value).subscribe((res) => {
      console.log("result--->>", res);
      if (res.isLogin) {
        localStorage['jwt'] = res.token;
        this.router.navigate(['home']);
      } else {
        this.errorMessage = res.message;
      }
    });
  }
}
