<template>
  <header class="page-header">
    <a class="page-logo" href="/">
      <img alt="FUA PWA" class="logo desktop-only" src="@/assets/logo/logo.png">
      <img alt="FUA PWA" class="logo mobile-only" src="@/assets/logo/logo.png">
    </a>
    <h1 class="page-title"> Todos </h1>
    <span class="nav-bar" @click="openSidebar()">
      <a>
        <img class="avatar-circle" v-if="!currentUser" src="https://lh3.googleusercontent.com/a-/AAuE7mAb0P68bHfZdRaxwnqZmyH4J0dUZ1Vkimd0qiz0" alt="Guest">
        <img class="avatar-circle" v-else :src="currentUser.picture " :alt="currentUser.name">
      </a>
    </span>
  </header>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class Header extends Vue {

    private openSidebar() {
      this.$emit('openSidebar', true);
    }

     get currentUser() {
      return this.$store.state.currentUser;
    }
  }
</script>
