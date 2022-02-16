import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  public loginMessage: any;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.userForm.value);
    this.userService.login(this.userForm.value.username, this.userForm.value.password)
    .subscribe(
      res => {
        this.loginMessage = res;
      },
      err => {
        console.log('HTTP Error', err)
      },
      () => console.log('HTTP request completed.')
    );
  }

}
