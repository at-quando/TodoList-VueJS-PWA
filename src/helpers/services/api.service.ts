import axios from 'axios';

interface ServerResponse {
  data: object;
}

export class APIService {
  constructor() {
    axios.defaults.baseURL = 'https://us-central1-todo-list-pwa-6f02f.cloudfunctions.net/app/';
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS';
    axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type';
    axios.interceptors.request.use((request) => {
      request.headers['access-token'] = localStorage.getItem('ACCESS_TOKEN');
      return request;
    }, (error) => {
      return Promise.reject(error);
    });
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        // handle error
        if ( error.response && error.response.status === 401 ) {
          return Promise.reject( error );
        }
      });
  }

  public createURL(uri: string[]) {
    return uri.join('/');
  }

  public get(uri: string[], options = {}) {
    return new Promise((resolve, reject) => {
      axios.get(this.createURL(uri), {
        params: options,
      })
      .then((resp: ServerResponse ) => {
        resolve(resp.data);
      })
      .catch((err: any) => {
        reject(err);
      });
    });
  }

  public post(uri: string[], data = {}) {
    return new Promise((resolve, reject) => {
      axios.post(this.createURL(uri), data)
        .then((resp: any) => {
          resolve(resp.data);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }

  public put(uri: string[], data = {}) {
    const url = uri.join( '/' );
    return new Promise((resolve, reject) => {
      axios.put(this.createURL(uri), data)
        .then((resp: ServerResponse) => {
          resolve(resp.data);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }

  public delete(uri: string[]) {
    return new Promise((resolve, reject) => {
      axios.delete(this.createURL(uri))
        .then((resp: ServerResponse) => {
          resolve(resp.data);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }

  public multipeGets(apiRequests: any) {
    const apiReqs = apiRequests.map((v: any) =>
      axios.get(v),
    );
    return new Promise( ( resolve, reject ) => {
      axios.all(apiReqs)
        .then((resp: any) => {
          resolve(resp.map((v: any) => v.data ));
        })
        .catch((err: any) => reject(err));
    });
  }

  public setHeader() {
    axios.defaults.headers = {
      'content-type': 'application/json',
      'access-Token': localStorage.getItem( 'ACCESS_TOKEN' ),
      'uid': localStorage.getItem( 'UID' ),
      'client': localStorage.getItem( 'CLIENT'),
    };
  }
}

