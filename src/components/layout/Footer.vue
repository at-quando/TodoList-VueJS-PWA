<template>
  <footer class="todos-footer">
    <ul class="todos-footer-toolbar">
      <li class="toolbar-item counter">
        <strong class="n-counter">{{countTasksLeft}}</strong>
        <p>{{ $t('feature.taskLeft') }}</p>
      </li>
      <li class="toolbar-item">
        <button class="toolbar-btn" :class="{ active: toggleActive(1) }" @click="filterTasks(1)">
          <strong class="ec-papers"></strong>
          <p>{{ $t('feature.allTasks') }}</p>
        </button>
      </li>
      <li class="toolbar-item">
        <button class="toolbar-btn" :class="{ active: toggleActive(2) }" @click="filterTasks(2, 0)">
          <strong class="ec-ebook"></strong>
          <p>{{ $t('feature.active') }}</p>
        </button>
      </li>
      <li class="toolbar-item">
        <button class="toolbar-btn" :class="{ active: toggleActive(3) }" @click="filterTasks(3, 1)">
          <strong class="ec-check-clipboard-1"></strong>
          <p>{{ $t('feature.completed') }}</p>
        </button>
      </li>
      <li class="toolbar-item cleaner">
        <button class="toolbar-btn" :disabled="countTasks === 0" @click="clearTasks()">
          <strong class="ec-database-remove"></strong>
          <p>{{ $t('feature.clear') }}</p>
        </button>
      </li>
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
    return this.$store.state.tasks.filter((x: any) => !x.type).length;
  }

  private filterTasks(pos: number, cond = null) {
    this.toggleActive(pos);
    this.activeMenu = pos;
    this.$store.dispatch('listTasks', cond);
  }

  private clearTasks() {
    this.$store.dispatch('clearTasks');
  }

  private toggleActive(val: number) {
    return this.activeMenu === val;
  }
}
</script>