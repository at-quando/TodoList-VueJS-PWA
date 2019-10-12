<template>
  <div class="feature">
    <Header @openSidebar="sidebarControl($event)" @closeSidebar="sidebarControl($event)"></Header>
    <div class="main">
      <InputTask/>
      <ListTask :tasks="tasksConvert"/>
      <Footer></Footer>
    </div>
    <transition
      name="sidebar-transition"
      enter-active-class="animated slideInRight"
      leave-active-class="animated slideOutRight">
      <Sidebar v-if="isSidebar"></Sidebar>
    </transition>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Footer from '@/components/layout/Footer.vue';
  import Header from '@/components/layout/Header.vue';
  import InputTask from '@/components/modules/tasks/InputTask.vue';
  import ListTask from '@/components/modules/tasks/ListTasks.vue';
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

    // private tasksConvert: any = [];
    private isSidebar: boolean = false;

    private created() {
      this.$store.dispatch('listTasks');
    }

    get tasksConvert() {
      return this.$store.state.tasks;
    }

    private sidebarControl(event: any) {
      this.isSidebar = event;
    }
  }
</script>
