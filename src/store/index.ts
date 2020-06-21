import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";
import { mutations } from "./mutations";
import { user } from "./user";

Vue.use(Vuex);

const initialState: RootState = {
  loading: false
};

const store: StoreOptions<RootState> = {
  state: initialState,
  mutations,
  modules: { user }
};

export default new Vuex.Store<RootState>(store);
