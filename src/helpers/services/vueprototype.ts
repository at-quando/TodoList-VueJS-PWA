import Vue from 'vue';

declare module 'vue/types/vue' {
  interface Vue {
    $http: any;
    $firebase: any;
  }
}
