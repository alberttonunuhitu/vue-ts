import { MutationTree } from "vuex";
import { MutationTypes, UserState, User } from "./types";

export type Mutations<S = UserState> = {
  [MutationTypes.SET_LOGGED_IN](state: S, payload: boolean): void;
  [MutationTypes.SET_USER](state: S, payload: User): void;
};

export const mutations: MutationTree<UserState> & Mutations = {
  [MutationTypes.SET_LOGGED_IN](state, payload: boolean) {
    state.loggedIn = payload;
  },
  [MutationTypes.SET_USER](state, payload: User) {
    state.data = payload;
  }
};
