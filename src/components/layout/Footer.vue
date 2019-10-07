<template>
  <footer class="todos-footer">
    <ul class="todos-footer-toolbar">
      <li class="toolbar-item counter"><strong class="n-counter">1</strong> item(s) left </li>
      <li class="toolbar-item"><button class="toolbar-btn active"><i class="i-clean-filter"></i> All Tasks </button></li>
      <li class="toolbar-item"><button class="toolbar-btn"><i class="i-tasks"></i> Active </button></li>
      <li class="toolbar-item"><button class="toolbar-btn"><i class="i-tasks-done"></i> Completed </button></li>
      <li class="toolbar-item cleaner"><button class="guardian" disabled=""><i class="i-tasks-closing"></i> Clear completed </button></li>
    </ul>
  </footer>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class Footer extends Vue {}
</script>