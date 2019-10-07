<template>
  <div class="home">
    <Header></Header>
    <!-- //main content -->
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Header from '@/components/layout/Header.vue'; // @ is an alias to /src
  import Footer from '@/components/layout/Footer.vue'; // @ is an alias to /src

  @Component({
    components: {
      Header,
      Footer,
    },
  })
  export default class Home extends Vue {}
</script>
