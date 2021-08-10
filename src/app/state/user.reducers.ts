import { createReducer, on, Action } from '@ngrx/store';

import  User  from '../models/User';
import { editUser } from './user.actions';

export const initialState: ReadonlyArray<User> = [
    {name: 'Mattew Broderick', id: '1', profession:'Actor', description:'I am mattew', image:'url'},
    {name: 'Ana lorem', id: '2', profession:'Actor', description:'I am ANA', image:'url'},
    {name: 'John uno', id: '3', profession:'Actor', description:'I am number UNO', image:'url'}
];

export const UsersReducer = createReducer(
  initialState,
  on(editUser,
    (state,ModifiedUser)=>
    {
        let modifiedState = state.filter((user)=>{
            return !(user.id === ModifiedUser.id)
        })
        return [...modifiedState,ModifiedUser]
    })
)