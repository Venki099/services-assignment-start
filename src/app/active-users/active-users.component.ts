import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../user-service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  constructor(private userservice:UserService){}
   users: string[];
   ngOnInit(){
    this.users = this.userservice.activeUsers
   }
  // @Output() userSetToInactive = new EventEmitter<number>();

  onSetToInactive(id: number) {
    // this.userSetToInactive.emit(id);
    this.userservice.settoInactive(id);

  }
}
