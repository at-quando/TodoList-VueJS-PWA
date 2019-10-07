<template>
  <div class="input-comp">
    <input class="input-task" placeholder="What need to be done?">
    <button class="btn add-btn"><i class="ec ec-file-add"></i></button>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class InputTask extends Vue {}
</script>
