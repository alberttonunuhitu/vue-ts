import { Module } from "vuex";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { UserState } from "./types";
import { RootState } from "../types";

const initialState: UserState = {
  loggedIn: false,
  data: null
};

export const state: UserState = initialState;

const namespaced = true;

export const user: Module<UserState, RootState> = {
  namespaced,
  state,
  mutations,
  getters
};
