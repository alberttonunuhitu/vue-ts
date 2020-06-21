import { GetterTree } from "vuex";
import { UserState } from "./types";
import { RootState } from "../types";

export const getters: GetterTree<UserState, RootState> = {
  displayName(state): string {
    const user = state.data;

    if (user?.displayName) {
      return user.displayName;
    }

    if (user?.email) {
      return user.email;
    }

    if (user?.phoneNumber) {
      return user.phoneNumber;
    }

    return "DISPLAY_NAME";
  },
  isLoggedIn(state): boolean {
    return state.loggedIn;
  }
};
