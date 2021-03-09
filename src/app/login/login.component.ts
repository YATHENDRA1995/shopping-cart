import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from '../config/config';
import { HttpLayerService } from '../services/http-layer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usersList;
  public model = {
    userName: null,
    password: null
  }

  constructor(
    public router: Router,
    public httpLayer: HttpLayerService,
    public toast: ToastrService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    try {
      this.httpLayer.get(Config.LOCAL_SERVICE.login).subscribe((response) => {
        if (response.status) {
          this.usersList = response.data;
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  login() {
    try {
      if (this.checkUser(this.model)) {
        this.router.navigate(['layout']);
        this.toast.success("Logged In Successfully", "Success");
      } else {
        this.toast.error('Incorrect username or password', 'Login Failed');
      }
    } catch (error) {
      console.log(error);
    }
  }

  checkUser(data) {
    try {
      let count = 0;
      this.usersList.map((user, index) => {
        if (user.userName === data.userName) {
          if (user.password === data.password) {
            count++;
          }
        }
      });
      if (count) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }

}
