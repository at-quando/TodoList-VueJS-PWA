import LocalForage from 'localforage';

// This must be called before any other calls to localForage are made:
LocalForage.config({
  name: 'todo-app',
  storeName: 'foo-app-store',
  version: 1.0,
});

export default LocalForage;
