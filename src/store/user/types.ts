import { User } from "firebase/app";

export enum MutationTypes {
  SET_LOGGED_IN = "SET_LOGGED_IN",
  SET_USER = "SET_USER"
}

export interface UserState {
  loggedIn: boolean;
  data: User | null;
}

export { User };
