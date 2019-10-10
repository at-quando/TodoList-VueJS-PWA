<template>
  <footer class="todos-footer">
    <ul class="todos-footer-toolbar">
      <li class="toolbar-item counter"><strong class="n-counter">{{countTasksLeft}}</strong> item(s) left </li>
      <li class="toolbar-item"><button class="toolbar-btn active" @click="filterTasks()"><i class="i-clean-filter"></i> All Tasks </button></li>
      <li class="toolbar-item"><button class="toolbar-btn" @click="filterTasks(0)"><i class="i-tasks"></i> Active </button></li>
      <li class="toolbar-item"><button class="toolbar-btn" @click="filterTasks(1)"><i class="i-tasks-done"></i> Completed </button></li>
      <li class="toolbar-item cleaner"><button class="guardian" :disabled="countTasks === 0" @click="clearTasks()"><i class="i-tasks-closing"></i> Clear completed </button></li>
    </ul>
  </footer>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class Footer extends Vue {
    get countTasks() {
      return this.$store.state.tasks.length;
    }

    get countTasksLeft() {
      return this.$store.state.tasks.filter((x: any) => x.type === 0).length;
    }

    private filterTasks(cond = null) {
      this.$store.dispatch('listTasks', cond);
    }

    private clearTasks() {
      this.$store.dispatch('clearTasks');
    }
  }
</script>