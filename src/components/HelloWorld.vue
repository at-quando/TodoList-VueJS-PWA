<template>
  <div class="todos">
    <header class="page-header">
      <a class="page-logo" href="/">
        <img alt="FUA PWA" class="logo desktop-only" src="@/assets/logo/logo-1x.png">
        <img alt="FUA PWA" class="logo mobile-only" src="@/assets/logo/logo-2x.png">
      </a>
      <h1 class="page-title"> Todos </h1>
      <span class="nav-bar text-right"><a><img class="avatar-circle" src="https://lh3.googleusercontent.com/a-/AAuE7mAb0P68bHfZdRaxwnqZmyH4J0dUZ1Vkimd0qiz0" alt="Phuc Le"></a></span>
    </header>
    <div class="page-main">
      <footer class="todos-footer">
        <ul class="todos-footer-toolbar">
          <li class="toolbar-item counter"><strong class="n-counter">1</strong> item(s) left </li>
          <li class="toolbar-item"><button class="toolbar-btn active"><i class="i-clean-filter"></i> All Tasks </button></li>
          <li class="toolbar-item"><button class="toolbar-btn"><i class="i-tasks"></i> Active </button></li>
          <li class="toolbar-item"><button class="toolbar-btn"><i class="i-tasks-done"></i> Completed </button></li>
          <li class="toolbar-item cleaner"><button class="guardian" disabled=""><i class="i-tasks-closing"></i> Clear completed </button></li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import InstallBanner from './layout/InstallBanner.vue';
import { formStore } from '@/storage/local';

type Nullable<T> = T | null;
type Optional<T> = T | undefined;

@Component({
  components: {
    'install-banner': InstallBanner,
  },
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  test() {
    formStore.setItem<Optional<Nullable<object>>>('some-form-author', {key: 1, value: 10});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
