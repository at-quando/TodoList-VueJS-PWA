export default {
  mutatelistTasks: (state: any, payload: any) => {
    state.tasks = payload;
  },
  mutateremoveTasks: (state: any, payload: any) => {
    // commit('mutateBooking', payload)
  },
  mutateupdateTasks: (state: any, payload: any) => {
    // commit('mutateBooking', payload)
    const tasks = state.tasks;
    const editTaskIndex = tasks.findIndex((x: any) => x.id === payload.id);
    state.tasks[editTaskIndex] = payload;
  },
};
