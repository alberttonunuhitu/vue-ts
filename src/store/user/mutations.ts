import { MutationTree } from "vuex";
import { UserState, User } from "./types";

export const mutations: MutationTree<UserState> = {
  setLoggedIn(state, payload: boolean) {
    state.loggedIn = payload;
  },
  setUser(state, payload: User) {
    state.data = payload;
  }
};
