<template>
  <div class="feature">
    <Header></Header>
    <!-- //main content -->
    <div class="main">
      <InputTask/>
      <ListTask :tasks="tasksConvert"/>
    </div>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Footer from '@/components/layout/Footer.vue';
  import Header from '@/components/layout/Header.vue';
  import InputTask from '@/components/modules/tasks/InputTask.vue';
  import ListTask from '@/components/modules/tasks/ListTasks.vue';
  import { Task } from '../helpers/models/task.interface';

  type Nullable<T> = T | null;
  type Optional<T> = T | undefined;

  @Component({
    components: {
      Header,
      InputTask,
      ListTask,
      Footer,
    },
  })
  export default class Feature extends Vue {

    // private tasksConvert: any = [];

    private created() {
      this.$store.dispatch('listTasks');
    }

    get tasksConvert() {
      return this.$store.state.tasks;
    }
  }
</script>
