import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../user-service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
   users: string[];
  ngOnInit(){
    this.users = this.usersservice.inactiveUsers
  }
  // @Output() userSetToActive = new EventEmitter<number>();

  constructor(private usersservice:UserService){}

  onSetToActive(id: number) {
    this.usersservice.settoActive(id);
  }
}
