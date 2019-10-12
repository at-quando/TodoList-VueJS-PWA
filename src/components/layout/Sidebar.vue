<template>
  <aside class="aside-profile" v-if="!hideSidebar">
    <ul class="menu-list">
      <li class="menu-item">
        <div class="profile-avatar"><img src="https://lh3.googleusercontent.com/a-/AAuE7mAb0P68bHfZdRaxwnqZmyH4J0dUZ1Vkimd0qiz0" alt="Phuc Le"></div>
        <div class="user-info"><h6 class="name">Phuc Le</h6><span class="email">thanhphuc1991@gmail.com</span></div>
        <!-- <a class="btn-close-panel" @click="closeSidebar()">X</a> -->
        <i class="btn-close-panel ec ec-cancel" @click="closeSidebar()"></i>
      </li>
      <li class="menu-item">
        <a><i class="i-angle-left"></i>Your Tasks</a>
      </li>
      <li class="menu-item">
        <a><i class="i-sign-out"></i>Sign Out</a>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class Sidebar extends Vue {
    hideSidebar: Boolean = false;

    closeSidebar() {
      this.hideSidebar = true;
      this.$emit('closeSidebar', this.hideSidebar);
    }
  }
</script>
