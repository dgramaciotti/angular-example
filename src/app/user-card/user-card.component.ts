import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import User from '../models/User';
import { editUser, removeUser } from '../state/user.actions';
import { UsersReducer } from '../state/user.reducers';
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  constructor(private store: Store) { 
    
  }
  ngOnInit(): void {
  }
  username = 'Mateus broderrico'
  bio = 'I am mateus broderrico. Oh yeah'
  profession = 'Actor'
  isEditing = false;
  edit(){
    this.isEditing === true ? this.isEditing = false : this.isEditing = true;
    let user:User = {name: 'Mateus broderrico', id: '1', profession:'Actor', description:'I am mattew', image:'url'}
  }
  delete(){
    console.log("delete")
  }
  save(){
    let user:User ={
      id: '1',
      name: this.username,
      profession: this.profession,
      description: this.bio,
      image: 'url'
    }
    this.store.dispatch(editUser(user))
  }
}
