import LocalForage from '@/storage/local';

export default {
  listTasks: ({commit}: any, payload = null) => {
    LocalForage.getItem('tasks').then((data: any) => {
      let tasks: any = data ? data : [];
      if (payload !== null) {
        tasks = tasks.filter((x: any) => +x.type === payload);
      }
      commit('mutatelistTasks', tasks);
    });
  },
  removeTask: ({commit}: any, payload: any) => {
    LocalForage.getItem('tasks').then((data) => {
      let tasks: any = data ? data : [];
      tasks = tasks.filter((x: any) => x.id !== payload.id);
      LocalForage.setItem('tasks', tasks).then((res) => {
        commit('mutatelistTasks', tasks);
      });
    });
  },
  updateTask: ({commit}: any, payload: any) => {
    LocalForage.getItem('tasks').then((data) => {
      const tasks: any = data ? data : [];
      const editTaskIndex = tasks.findIndex((x: any) => x.id === payload.id);
      tasks[editTaskIndex] = payload;
      LocalForage.setItem('tasks', tasks).then((res) => {
        commit('mutatelistTasks', tasks);
      });
    });
  },
  clearTasks: ({commit}: any, payload: any) => {
    LocalForage.setItem('tasks', []).then((res) => {
      commit('mutatelistTasks', []);
    })
    .catch((e: any) => console.log(e));
  },
  createTask: ({commit}: any, payload: any) => {
    LocalForage.getItem('tasks').then((data) => {
      const tasks: any = data ? data : [];
      payload.id = tasks.slice(-1)[0] ? tasks.slice(-1)[0].id + 1 : 1;
      LocalForage.setItem('tasks', [...tasks, payload]).then((res) => {
        commit('mutatelistTasks', [...tasks, payload]);
      }).catch((e: any) => console.log(e));
    });
  },
};
