import { Component, OnInit } from '@angular/core';
import { UsersData } from './usersData.serivce';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];
  constructor(private userData: UsersData){}
  
  ngOnInit(){
    this.activeUsers = this.userData.activeUsers;
    this.inactiveUsers = this.userData.inactiveUsers;
  }
  
}
