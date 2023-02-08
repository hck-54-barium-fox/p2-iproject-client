import { defineStore } from 'pinia';
import axios from 'axios';
const baseUrl = 'http://localhost:9000';
export const useBookingStore = defineStore('booking', {
  state: () => ({
    hotelByLocation: [],
    hotelsData: [],
    roomsHotel: [],
    detailHotel: {},
    isLogin: false,
  }),
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
        this.isLogin = true;
        this.router.push('/');
      } catch (err) {
        console.log(err);
      }
    },
    stillLogin() {
      this.isLogin = true;
    },
    async resetPassword(email) {
      try {
        const { data } = await axios.post(baseUrl + '/forgot-password', email);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    },
    async handleResetPassword(password, token) {
      try {
        const { data } = await axios.patch(
          baseUrl + '/reset-password?token=' + token,
          password
        );
        console.log(data);
        this.router.push('/');
      } catch (err) {
        console.log(err);
      }
    },
    async fetchHotelByLocation(arrivalDate, departureDate) {
      try {
        console.log(arrivalDate, departureDate, 'berhasil masuk');
        const { data } = await axios({
          method: 'get',
          url: baseUrl + '/hotels/location',
          data: {
            arrivalDate,
            departureDate,
          },
        });
        console.log('nunggu ya sabar');
        this.hotelByLocation = data;
        console.log(data, 'ini dari pinia');
      } catch (err) {
        console.log(err);
      }
    },
    async fetchHotel() {
      try {
        const { data } = await axios.get(baseUrl + '/hotels');
        console.log(data, 'ini hotel');
        this.hotelsData = data;
      } catch (err) {
        console.log(err);
      }
    },
    async getHotelRooms(hotelId) {
      try {
        const { data } = await axios.get(baseUrl + '/hotels/' + hotelId, {
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        });

        const block = data?.block.map((el) => {
          el.detail = data.rooms[el.roomId];
          return el;
        });
        console.log(data, '====', block);
        this.roomsHotel = block;
      } catch (err) {
        console.log(err);
      }
    },
    async getDetailHotel(idHotel, searchId) {
      try {
        const { data } = await axios.get(
          baseUrl + '/hotels/properties/' + idHotel + '?search_id=' + searchId,
          {
            headers: {
              access_token: localStorage.getItem('access_token'),
            },
          }
        );
        console.log(data);
        this.detailHotel = data;
      } catch (err) {
        console.log(err);
      }
    },
    async doCheckIn() {
      try {
        const { data } = await axios.post(
          'http://localhost:9000/check-in',
          {
            price: 10000,
            name: 'bisma',
            email: 'bisma2coc@gmail.com',
          },
          {
            headers: {
              access_token: localStorage.getItem('access_token'),
            },
          }
        );
        console.log(data);
        // window.snap.close();
        window.snap.pay(data.token, {
          onSuccess: function (result) {
            /* You may add your own implementation here */
            alert('payment success!');
            console.log(result);
          },
          onPending: function (result) {
            /* You may add your own implementation here */
            alert('wating your payment!');
            console.log(result);
          },
          onError: function (result) {
            /* You may add your own implementation here */
            alert('payment failed!');
            console.log(result);
          },
          onClose: function () {
            /* You may add your own implementation here */
            alert('you closed the popup without finishing the payment');
          },
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
});
