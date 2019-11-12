<template>
  <aside class="aside-profile">
    <ul class="menu-list">
      <li class="menu-item">
        <div class="profile-avatar"><img :src="currentUser.picture" alt="Phuc Le"></div>
        <div class="user-info"><h6 class="name">Phuc Le</h6><span class="email">{{currentUser.email}}</span></div>
        <!-- <a class="btn-close-panel" @click="closeSidebar()">X</a> -->
        <i class="btn-close-panel ec ec-cancel" @click="closeSidebar()"></i>
      </li>
      <li class="menu-item">
        <a><i class="i-angle-left"></i>Your Tasks</a>
      </li>
      <li class="menu-item">
        <a @click="logout()"><i class="i-sign-out"></i>Sign Out</a>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class Sidebar extends Vue {
    private closeSidebar() {
      this.$emit('closeSidebar', false);
    }

    get currentUser() {
      return this.$store.state.currentUser;
    }

    private logout() {
      localStorage.clear();
      this.$store.commit('mutateshowMe', null);
      this.$router.push('/auth');
    }
  }
</script>
