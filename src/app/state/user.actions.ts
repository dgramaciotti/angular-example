import { createAction, props } from '@ngrx/store';
import User from '../models/User';
 
export const editUser = createAction(
  '[User List] edit User',
  props<User>()
);
 
export const removeUser = createAction(
  '[User Collection] Remove User',
  props< User >()
);
