import LocalForage from '@/storage/local';
import { APIService } from '@/helpers/services/api.service';

const http = new APIService();

function checkAuth() {
  return localStorage.getItem('ACCESS_TOKEN') && localStorage.getItem('ID_TOKEN');
}
export default {
  showMe: ({commit}: any, payload = null) => {
    commit('setLoading', true);
    http.get(['users/me']).then((data: any) => {
      commit('mutateshowMe', data);
    }, (err: any) => {
      console.log(err);
      commit('setLoading', false);
    });
  },
  listTasks: ({commit}: any, payload = null) => {
    // const asyncReq = checkAuth() ? http.get(['users/me/todos']) : LocalForage.getItem('tasks');
    http.get(['users/me/todos']).then((data: any) => {
      let tasks: any = data ? data : [];
      if (payload !== null) {
        tasks = tasks.filter((x: any) => +x.type === payload);
      }
      commit('mutatelistTasks', tasks);
    });
  },
  removeTask: ({commit}: any, payload: any) => {
    http.delete(['users/me/todos', payload.id]).then((data) => {
      commit('mutateRemoveTask', payload.id);
    });
    // LocalForage.getItem('tasks').then((data) => {
    //   let tasks: any = data ? data : [];
    //   tasks = tasks.filter((x: any) => x.id !== payload.id);
    //   LocalForage.setItem('tasks', tasks).then((res) => {
    //     commit('mutatelistTasks', tasks);
    //   });
    // });
  },
  updateTask: ({commit}: any, payload: any) => {
    http.put(['users/me/todos', payload.id], payload).then((data) => {
      commit('mutateUpdateTask', payload);
    });
    // LocalForage.getItem('tasks').then((data) => {
    //   const tasks: any = data ? data : [];
    //   const editTaskIndex = tasks.findIndex((x: any) => x.id === payload.id);
    //   tasks[editTaskIndex] = payload;
    //   LocalForage.setItem('tasks', tasks).then((res) => {
    //     commit('mutateupdateTasks', payload);
    //   });
    // });
  },
  clearTasks: ({commit}: any, payload: any) => {
    LocalForage.getItem('tasks').then((data) => {
      let tasks: any = data ? data : [];
      tasks = tasks.filter((x: any) => !x.type);
      LocalForage.setItem('tasks', tasks).then((res) => {
        commit('mutatelistTasks', tasks);
      });
    });
  },
  createTask: ({commit}: any, payload: any) => {
    http.post(['users/me/todos'], payload).then((data) => {
      payload.id = data;
      commit('mutateAddTask', payload);
    });
    // LocalForage.getItem('tasks').then((data) => {
    //   const tasks: any = data ? data : [];
    //   payload.id = tasks.slice(-1)[0] ? tasks.slice(-1)[0].id + 1 : 1;
    //   LocalForage.setItem('tasks', [...tasks, payload]).then((res) => {
    //     commit('mutatelistTasks', [...tasks, payload]);
    //   });
    // });
  },
};
