import { MutationTree } from "vuex";
import { RootState } from "./types";

export const mutations: MutationTree<RootState> = {
  setLoading(state, payload: boolean) {
    state.loading = payload;
  }
};
