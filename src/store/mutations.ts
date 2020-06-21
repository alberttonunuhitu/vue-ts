import { MutationTree } from "vuex";
import { MutationTypes, RootState } from "./types";

export type Mutations<S = RootState> = {
  [MutationTypes.SET_LOADING](state: S, payload: boolean): void;
};

export const mutations: MutationTree<RootState> & Mutations = {
  [MutationTypes.SET_LOADING](state, payload: boolean) {
    state.loading = payload;
  }
};
