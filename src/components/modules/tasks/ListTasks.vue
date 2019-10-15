<template>
  <div class="list-tasks container">
    <div class="no-post" v-if="!tasksConvert || tasksConvert.length === 0">
      <i class="ec ec-paperclip"></i>
      <p class="no-post-message">You don't have any task.</p>
    </div>
    <div v-else>
      <transition-group
        name="transition-item"
        tag="div"
      >
        <div class="task-item" v-for="task in tasksConvert" :key="task.id">
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

    get tasksConvert() {
      return this.$store.state.tasks;
    }
  }
</script>
<style>
.transition-item-enter-active, .transition-item-leave-active {
  transition: all 0.5s;
}
.transition-item-enter {
  transform: translateY(-20px);
}
.transition-item-enter-to, .transition-item-leave {
  opacity: 1;
  position: relative;
}
.transition-item-leave-to {
  transform: translateX(500px);
}

</style>
