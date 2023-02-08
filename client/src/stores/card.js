import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useCardStore = defineStore({
  id: "card",
  state: () => {
    return {
      username: localStorage.getItem('username'),
      dataCard: '',
      dataDeck: '',
      dataPlayer: ''
    };
  },
  getters: {},
  actions: {
    async postLogin(user) {
      try {
        let { data } = await axios({
          method: "post",
          url: "http://localhost:3000/login",
          data: user,
        });
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("username", data.username);
        this.username = localStorage.username;
        localStorage.setItem("userId", data.id);
        this.router.push('/')
        Swal.fire({
          title: "Great!",
          text: `Welcome back, ${data.username.split("@")[0]}`,
          icon: "success",
          confirmButtonText: "Cool!",
        });
      } catch (error) {
        this.router.push('/login')
        Swal.fire({
          title: "Error!",
          html: `${error.response.data.message}`,
          icon: "error",
          confirmButtonText: "Try again!",
        });
      }
    },
    async submitRegister(customer) {
      try {
        let { data } = await axios({
          method: "post",
          url: "http://localhost:3000/register",
          data: customer,
        });
        Swal.fire({
          title: "Great!",
          text: `Welcome to the club, ${
            customer.email.split("@")[0]
          }! Please login first!`,
          icon: "success",
          confirmButtonText: "Cool!",
        });
        this.router.push('/login')
      } catch (error) {
        this.router.push('/register')
        let errorMsg = error.response.data.errorsMessages.map(
          (el) => el.message + "<br>"
        );
        Swal.fire({
          title: "Error!",
          html: `${errorMsg.join("")}`,
          icon: "error",
          confirmButtonText: "Try again!",
        });
      }
    },
    async postLoginCR(id) {
      try {
        console.log(id)
        let { data } = await axios({
          method: "post",
          url: "http://localhost:3000/login-cr",
          data: {Id: id}
        });
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("username", data.email);
        this.username = localStorage.username
        localStorage.setItem("userId", data.id);
        Swal.fire({
          title: "Great!",
          text: `Welcome back, ${data.email.split("@")[0]}`,
          icon: "success",
          confirmButtonText: "Cool!",
        });
        this.router.push('/')
      } catch (error) {
        this.router.push('/login')
        Swal.fire({
          title: "Error!",
          html: `${error.response.data.message}`,
          icon: "error",
          confirmButtonText: "Try again!",
        });
      }
    },
    async fetchCard(sort){
      try {
        let query = ''
        if (sort) {
          if (sort.sort == 1) {
            query = '?sort=1'
          } else {
            query = '?sort=2'
          }
        }
        let { data } = await axios({
          method: 'get',
          url: `http://localhost:3000/cards${query}`
        })
        this.dataCard = data
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: `Internal server error`,
          icon: "error",
          confirmButtonText: "Try again!",
        });
      }
    },
    async postMyDeck(cardId){
      try {
        let { data } = await axios({
          method: 'post',
          url: `http://localhost:3000/mydeck/${cardId}`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        Swal.fire({
          title: "Great!",
          text: `Success add to deck!`,
          icon: "success",
          confirmButtonText: "Cool!",
        });
      } catch (error) {
        Swal.fire({
          title: "Error!",
          html: `This card already in your deck!`,
          icon: "error",
          confirmButtonText: "Try again!",
        });
      }
    },
    async fetchMyDeck(){
      try {
        let { data } = await axios({
          method: 'get',
          url: 'http://localhost:3000/mydeck',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.dataDeck = data
      } catch (error) {
        Swal.fire({
          title: "Error!",
          html: `${error.response.data.message}`,
          icon: "error",
          confirmButtonText: "Try again!",
        });
      }
    },
    async deleteCard(cardId){
      try {
        let { data } = await axios({
          method: 'delete',
          url: `http://localhost:3000/mydeck/${cardId}`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        Swal.fire({
          title: "Great!",
          text: `Success remove from deck!`,
          icon: "success",
          confirmButtonText: "Cool!",
        });
        this.fetchMyDeck()
      } catch (error) {
        Swal.fire({
          title: "Error!",
          html: `${error.response.data.message}`,
          icon: "error",
          confirmButtonText: "Try again!",
        });
      }
    },
    async findPlayer(tag){
      try {
        console.log(tag, 'initago')
        let { data } = await axios({
          method: 'post',
          url: 'http://localhost:3000/players',
          data: {
            tag
          }
        })
        console.log(data, 'inidata')
        this.dataPlayer = data
      } catch (error) {
        Swal.fire({
          title: "Error!",
          html: `${error.response.data.message}`,
          icon: "error",
          confirmButtonText: "Try again!",
        });
      }
    }
  },
});
