<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <install-banner/>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <button @click="test()">123123312</button>
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
