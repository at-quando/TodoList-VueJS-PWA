<template>
  <div class="feature">
    <Header></Header>
    <!-- //main content -->
    <div class="main">
      <InputTask/>
      <ListTask :tasks="tasksConvert"/>
      <Footer></Footer>
    </div>
    <!-- <Footer></Footer> -->
    <Sidebar></Sidebar>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Footer from '@/components/layout/Footer.vue';
  import Header from '@/components/layout/Header.vue';
  import InputTask from '@/components/modules/tasks/InputTask.vue';
  import ListTask from '@/components/modules/tasks/ListTasks.vue';
  import { dbStore } from '@/storage/local';
  import { Task } from '../helpers/models/task.interface';
  import Sidebar from '@/components/layout/Sidebar.vue';

  type Nullable<T> = T | null;
  type Optional<T> = T | undefined;

  @Component({
    components: {
      Header,
      InputTask,
      ListTask,
      Footer,
      Sidebar,
    },
  })
  export default class Feature extends Vue {

    private tasksConvert: any = [];

    private mounted() {
      this.createTask();
      this.getTasks();
    }

    private async createTask() {
      dbStore.setItem('tasks', []);
      let task: Task;
      let task1: Task;
      task = {
        id: 1,
        name: 'asfasf',
        date: new Date(),
        type: 0,
        content: '12312asdfasdfasdfas asd f312312123',
      };
      task1 = {
        id: 2,
        name: 'asfasdfasfasdfasdfasdfasdfasf',
        date: new Date(),
        type: 0,
        content: '12312312312123',
      };
      this.tasksConvert.push(task);
      this.tasksConvert.push(task1);
      dbStore.setItem('tasks', this.tasksConvert);
    }

    private async getTasks() {
      this.tasksConvert = await dbStore.getItem('tasks');
    }
  }
</script>
