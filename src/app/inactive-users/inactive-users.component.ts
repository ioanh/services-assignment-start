import { Component, OnInit} from '@angular/core';
import { UsersData } from '../usersData.serivce';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  constructor(private userData: UsersData){}
  users: string[];
  onSetToActive(id: number) {
    this.userData.onSetToActive(id);
  }
  ngOnInit(){
    this.users = this.userData.inactiveUsers
  }
}
