export default {
  mutatelistTasks: (state: any, payload: any) => {
    state.tasks = payload;
  },
  mutateRemoveTask: (state: any, payload: any) => {
    state.tasks = state.tasks.filter((x: any) => x.id !== payload);
  },
  mutateUpdateTask: (state: any, payload: any) => {
    const tasks = state.tasks;
    const editTaskIndex = tasks.findIndex((x: any) => x.id === payload.id);
    state.tasks[editTaskIndex] = payload;
  },
  mutateAddTask: (state: any, payload: any) => {
    const tasks = state.tasks;
    tasks.push(payload);
    state.tasks = tasks;
  },
  checkAuth: (state: any, payload: any) => {
    state.auth = localStorage.getItem('ACCESS_TOKEN') && localStorage.getItem('ID_TOKEN');
  },
  mutateshowMe: (state: any, payload: any) => {
    state.currentUser = payload;
    state.loading = false;
  },
  setLoading: (state: any, payload: any) => {
    state.loading = payload;
  },
};
