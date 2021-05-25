import { Component} from '@angular/core';
import { UsersData } from '../usersData.serivce';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {

  constructor(private userData: UsersData){}
  users = this.userData.activeUsers;
  onSetToActive(id: number) {
    this.userData.onSetToInactive(id);
  }
}
