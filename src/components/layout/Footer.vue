<template>
  <footer class="todos-footer">
    <ul class="todos-footer-toolbar">
      <li class="toolbar-item counter"><strong class="n-counter">{{countTasksLeft}}</strong> item(s) left </li>
      <li class="toolbar-item"><button class="toolbar-btn" :class="{ active: toggleActive(1) }" @click="filterTasks(1)"><i class="i-clean-filter"></i> All Tasks </button></li>
      <li class="toolbar-item"><button class="toolbar-btn" :class="{ active: toggleActive(2) }" @click="filterTasks(2, 0)"><i class="i-tasks"></i> Active </button></li>
      <li class="toolbar-item"><button class="toolbar-btn" :class="{ active: toggleActive(3) }" @click="filterTasks(3, 1)"><i class="i-tasks-done"></i> Completed </button></li>
      <li class="toolbar-item cleaner"><button class="guardian" :disabled="countTasks === 0" @click="clearTasks()"><i class="i-tasks-closing"></i> Clear completed </button></li>
    </ul>
  </footer>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class Footer extends Vue {
    private activeMenu: number = 1;

    get countTasks() {
      return this.$store.state.tasks.length;
    }

    get countTasksLeft() {
      return this.$store.state.tasks.filter((x: any) => x.type === 0).length;
    }

    private filterTasks(pos: number, cond = null) {
      this.toggleActive(pos);
      this.activeMenu = pos;
      this.$store.dispatch('listTasks', cond);
    }

    private clearTasks() {
      this.$store.dispatch('clearTasks');
    }

    toggleActive(val: number) {
      return this.activeMenu === val;
    }
  }
</script>