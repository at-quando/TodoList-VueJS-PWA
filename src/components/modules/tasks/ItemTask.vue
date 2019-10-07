<template>
  <div class="task">
    <span><i class="ec" :class="[task.type ? 'ec-check-square-o' : 'ec-square-o']" @click="tickTask()"></i></span>
    <p class="content">{{task.content}}</p>
    <button class="btn-del" @click="remove"><i class="ec ec-cancel"></i></button>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';

  @Component
  export default class ItemTask extends Vue {
    @Prop() private task!: any;
    
    private tickTask() {
      this.task.type = !this.task.type;
    }

    private remove() {
      this.$emit('removeTask', {id: 1});
    }
  }
</script>
