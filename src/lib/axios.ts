import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3000',
})


// import { getCurrentUser } from '@api/auth';

// import axios from 'axios';

// export const getUserEmail = (): any => {
//   if (localStorage.getItem('user') != null) {
//     return JSON.parse(localStorage.getItem('user')!).email;
//   } else {
//     return null;
//   }
// };

// const api = axios.create({
//   baseURL: ''http://localhost:3000',
//   timeout: 1000,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// api.interceptors.request.use(
//   async config => {
//     const user = await getCurrentUser();

//     if (!user) throw new Error('Usuário não autenticado');

//     if (config.headers) {
//       config.headers.token = await user.getIdToken();
//     }

//     return config;
//   },
//   error => Promise.reject(error),
// );

// export { api };

