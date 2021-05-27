import { Component, OnInit} from '@angular/core';
import { UsersData } from '../usersData.serivce';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{

  constructor(private userData: UsersData){}

  users: string[];

  onSetToInactive(id: number) {
    this.userData.onSetToInactive(id);
  }
  ngOnInit(){
    this.users = this.userData.activeUsers
  }
}
