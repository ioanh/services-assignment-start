import { Component} from '@angular/core';
import { UsersData } from '../usersData.serivce';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {

  constructor(private userData: UsersData){}

  users = this.userData.inactiveUsers;

  onSetToInactive(id: number) {
    this.userData.onSetToActive(id);
  }
}
