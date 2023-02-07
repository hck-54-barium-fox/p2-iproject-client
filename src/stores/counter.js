import { defineStore } from 'pinia';
import axios from 'axios';
const baseUrl = 'http://localhost:9000';
export const useBookingStore = defineStore('booking', {
  state: () => ({}),
  getters: {},
  actions: {
    async handleRegister(form) {
      try {
        const { data } = await axios.post(baseUrl + '/register', form);
        console.log(data, 'ini data');
        this.router.push('/login');
      } catch (err) {
        console.log(err);
      }
    },
    async handleLogin(form) {
      try {
        const { data } = await axios.post(baseUrl + '/login', form);
        console.log(data);
        localStorage.setItem('access_token', data.access_token);
        this.router.push('/');
      } catch (err) {
        console.log(err);
      }
    },
  },
});
