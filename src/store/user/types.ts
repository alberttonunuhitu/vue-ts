import firebase from 'firebase';

export const SET_LOGGED_IN = 'setLoggedIn';
export const SET_USER = 'setUser';

export type User = firebase.User;

export interface UserState {
  loggedIn: boolean;
  data: User | null;
};