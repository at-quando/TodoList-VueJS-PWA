<template>
  <div class="list-tasks container">
    <div class="no-post" v-if="!tasks || tasks.length === 0">
      <i class="ec ec-page-search"></i>
      <p class="no-post-message">You don't have any task.</p>
    </div>
    <div v-else>
      <transition-group
        name="custom-classes-transition"
        enter-active-class="animated slideInDown"
        leave-active-class="animated bounceOutRight"
      >
        <div class="task-item" v-for="(task, index) of tasks" :key="index">
            <ItemTask :task="task" @removeTask="removeTaskEvent($event)"/>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';

  import ItemTask from './ItemTask.vue';

  @Component({
    components: {
      ItemTask,
    },
  })

  export default class ListTask extends Vue {
    @Prop() private tasks!: any;

    private removeTaskEvent(event: any) {
      // this.$store.dispatch('createTasks', {});
    }
  }
</script>
