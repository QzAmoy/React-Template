import axios from 'axios';

declare let API_BASE: string;

const getLocalToken = () => {
  const token = window.localStorage.getItem('token');
  return token;
};

const instance = axios.create({
  baseURL: API_BASE,
  timeout: 300000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: getLocalToken(),
  },
});

const setToken = (token: string) => {
  instance.defaults.headers['Authorization'] = token;
  window.localStorage.setItem('token', token);
};

const refreshToken = () => {
  return instance.post('/refreshtoken').then((res) => res.data);
};

let isRefreshing = false;
let requests = [];

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code !== 0) {
      if (res.message) {
        console.log(res.messge);
      }
      return Promise.reject(res);
    }
    return response.data;
  },
  (error) => {
    if (!error.response) return Promise.reject(error);
    const { code } = error.response.data;
    if (code === 401) {
      const { config } = error;
      if (!isRefreshing) {
        isRefreshing = true;
        return refreshToken()
          .then((res) => {
            const { token } = res.data;
            setToken(token);
            config.headers['Authorization'] = token;
            config.baseURL = '';
            requests.forEach((cb) => cb(token));
            requests = [];
            return instance(config);
          })
          .catch((res) => {
            console.error('refreshtoken error =>', res);
            window.location.href = '/';
          })
          .finally(() => {
            isRefreshing = false;
          });
      }
      return new Promise((resolve) => {
        requests.push((token: string) => {
          config.baseURL = '';
          config.headers['Authorization'] = token;
          resolve(instance(config));
        });
      });
    }
    return Promise.reject(error);
  }
);

export default instance;
