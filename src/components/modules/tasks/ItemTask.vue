<template>
  <div class="task" :class="[task.type ? 'unactive-content' : '']">
    <span><i class="ec" :class="[task.type ? 'ec-check-square-o' : 'ec-square-o']" @click="tickTask()"></i></span>
    <p class="content">{{task.content}}</p>
    <button class="btn-no-border btn-del" @click="remove()"><i class="ec ec-bin"></i></button>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';

  @Component
  export default class ItemTask extends Vue {
    @Prop() private task!: any;

    private tickTask() {
      this.task.type = !this.task.type;
      this.$store.dispatch('updateTask', this.task);
    }

    private remove() {
      this.$store.dispatch('removeTask', this.task);
    }
  }
</script>
