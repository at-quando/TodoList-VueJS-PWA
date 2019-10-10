<template>
  <div class="input-comp">
    <input class="input-task" v-model="task.content" placeholder="What need to be done?">
    <button class="add-btn btn-no-border" :disabled="!task.content" @click="addTask()"><i class="ec ec-file-add"></i></button>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class InputTask extends Vue {
    private task = {
      id: null,
      content: null,
      date: new Date(),
      type: 0,
      name: null,
    };

    private addTask() {
      this.task.date = new Date();
      this.$store.dispatch('createTask', {...this.task});
      this.task.content = null;
    }
  }
</script>
