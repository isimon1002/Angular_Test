import { Component, OnInit } from '@angular/core';

import { UserService } from "./user.service";
import { DataService } from "../shared/data.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService, DataService]
})
export class UserComponent implements OnInit {
  user: {name: string};
  isLoggedIn = false;
  data: string;
  moreData: string;

  constructor(private userService: UserService, private dataService: DataService) { }

  ngOnInit() {
    this.user = this.userService.user;
    this.dataService.getDetails3().then((moreData: string) => this.moreData = moreData);
    this.dataService.getDetails2().then((data: string) => this.data = data)
  }

}
