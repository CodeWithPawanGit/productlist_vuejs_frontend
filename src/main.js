import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import { createAuth0 } from '@auth0/auth0-vue';
import authConfig from './config/auth.config';
import { createRouter, createWebHistory } from 'vue-router';

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL // Your API base URL
});

const app = createApp(App);


app.use(
  createAuth0({
    domain: authConfig.domain,
    client_id: authConfig.clientId,
    redirect_uri: authConfig.redirectUri,
  }),
);

const routes = [
  { path: '/login', component: () => import('./components/LoginButton.vue') },
  { path: '/logout', component: () => import('./components/LogoutComponent.vue') },
  { path: '/user-profile', component: () => import('./components/UserProfile.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Mount the router
app.use(router);

app.config.globalProperties.$axios = axiosInstance;
app.mount('#app');
