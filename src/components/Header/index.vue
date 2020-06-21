<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand :to="{ name: 'Home' }">
        NavBar
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'Home' }">Beranda</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" v-if="isLoggedIn">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <!-- <em>User</em> -->
              {{ displayName }}
            </template>
            <b-dropdown-item href="javascript:void(0)">
              Profile
            </b-dropdown-item>
            <b-dropdown-item href="javascript:void(0)" @click="signOut">
              Sign Out
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto" v-else>
          <b-nav-item :to="{ name: 'Login' }">
            Masuk
          </b-nav-item>
          <b-nav-item :to="{ name: 'Register' }">
            Daftar
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
  BNavbar,
  BNavbarBrand,
  BNavbarToggle,
  BCollapse,
  BNavbarNav,
  BNavItem,
  BNavItemDropdown,
  BDropdownItem
} from "bootstrap-vue";
import firebase from "@/firebase";

@Component({
  components: {
    "b-navbar": BNavbar,
    "b-navbar-brand": BNavbarBrand,
    "b-navbar-toggle": BNavbarToggle,
    "b-collapse": BCollapse,
    "b-navbar-nav": BNavbarNav,
    "b-nav-item": BNavItem,
    "b-nav-item-dropdown": BNavItemDropdown,
    "b-dropdown-item": BDropdownItem
  }
})
export default class Header extends Vue {
  get isLoggedIn(): boolean {
    return this.$store.getters["user/isLoggedIn"];
  }

  get displayName(): string {
    return this.$store.getters["user/displayName"];
  }

  async signOut() {
    await firebase.auth().signOut();
  }
}
</script>
