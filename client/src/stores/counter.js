import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'


const baseUrl = 'http://localhost:3000'
export const useCounterStore = defineStore('counter', {
  state: () => ({
    isLogin: false,
    phone: [],
    detailPhone: {},
    qrCode: {},
    transaction: []
    
  }),
  actions: {
    handleRegister(register) {
      axios({
        method: "POST",
        url: `${baseUrl}/register`,
        data: register,
      })
      .then((res) => {
        this.router.push("/login");
        Swal.fire({
          icon: "success",
          title: "You did it",
          text: 'Success create account'
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Something wrong",
          text: err.response.data.message
        });
      });
    },

    handleLogin(input) {
      axios({
        method: "POST",
        url: `${baseUrl}/login`,
        data: input,
      })
      .then((res) => {
        console.log(res);
        Swal.fire({
          icon: "success",
          title: `Halo ${res.data.email}`,
          text: 'Rent for your ego!'
        });
        localStorage.setItem("access_token", res.data.access_token);
        localStorage.setItem("email", res.data.email);
        this.router.push("/smartphones");
        this.isLogin = true;
      })
      .catch((err) => {
        Swal.fire({
          icon: "success",
          title: "Something wrong!",
          text: err.response.data.message
        });
      });
    },

    handleGoogleLogin(response) {
      axios({
        method: "POST",
        url: `${baseUrl}/googleSignIn`,
        headers: {
          google_token: response.credential,
        },
      })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: `Halo ${res.data.email}`,
          text: 'Rent for your ego!'
        });
        localStorage.setItem("access_token", res.data.access_token);
        localStorage.setItem("email", res.data.email);
        this.isLogin = true;
        this.router.push("/smartphones");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: `Something wrong`,
          text: err.response.data.message
        });
      });
    },

    handleLogout(){
      Swal.fire({
        icon: "success",
        title: "Thanks for visiting us",
        text: 'See you next time'
      });
      localStorage.clear();
      this.router.push("/");
      this.isLogin = false;
    },

    fetchDataPhone(){
      axios({
        method: "get",
        url: `${baseUrl}/smartphones`,
      })
      .then((res) => {
        this.phone = res.data;
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: `Something wrong`,
          text: err.response.data.message
        });
      });
    },

    handleDetailPhoneById(id) {
      axios({
        method: "get",
        url: `${baseUrl}/smartphones/${id}`,
      })
      .then((res) => {
        this.detailPhone = res.data;
        this.handleQrCode(id);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: `Something wrong`,
          text: err.response.data.message
        });
      });
    },
    
    handleQrCode(id){
      let qrLinkUrl = "https://api.qrserver.com/v1/create-qr-code"
      axios({
        method: 'GET',
        url: qrLinkUrl,
        params: {
          data: `${baseUrl}/smartphones/${id}`,
          size: '300x300'
        },
        responseType: 'arraybuffer'
      })
      .then((res) => {
        let newData = new Blob([res.data], { type : "image/png" })
        this.qrCode = URL.createObjectURL(newData)
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Something wrong",
          text: error.response.data.message
        });
      })
    },

    rupiah(number) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(number);
    },

    handleTransaction(id){
      if (!localStorage.access_token){
        this.router.push('/login')
      } else {
        this.handleAddTransactions(id)
      }
    },
    // HANDLE ADDTRANSACTIONS
    handleAddTransactions(id){
      axios({
        method: "POST",
          url: `${baseUrl}/transactions/${id}`,
          headers: {
            access_token: localStorage.access_token,
          },
      })
      .then((res)=>{
        Swal.fire({
          icon: "success",
          title: "Success",
          text: 'Added to your purchase list'
        });
        this.router.push("/purchase")
      })
      .catch((err)=>{
        Swal.fire({
          icon: "error",
          title: "Something wrong",
          text: err.response.data.message
        });
      })
    },

    handleFetchTransaction(){
      axios({
        method: "GET",
          url: `${baseUrl}/transactions`,
          headers: {
            access_token: localStorage.access_token,
          },
      })
      .then((res)=>{
        this.transaction = res.data
      })
      .catch((err)=>{
        Swal.fire({
          icon: "error",
          title: "Something Wrong",
          text: err.response.data.message
        });
      })
    },

    handleStatus(id){
      axios({
        method: "PATCH",
          url: `${baseUrl}/transactions/${id}`,
          headers: {
            access_token: localStorage.access_token,
          },
      })
      .then((res)=>{
        this.handleFetchTransaction()
      })
      .catch((err)=>{
        Swal.fire({
          icon: "error",
          title: "Something Wrong",
          text: err.response.data.message
        });
      })
    },

    handlePayment(id, price){
      axios({
        method: "POST",
        url: `${baseUrl}/createMidtransToken/${price}`,
        headers: {
          access_token: localStorage.access_token,
        }
      })
      .then ((res)=>{
        const status = this.handleStatus;
        window.snap.pay(res.data.token, {
          onSuccess: (result)=> {
            status(id);
          },
        });
      })
      .catch((err)=>{
        Swal.fire({
          icon: "error",
          title: "Something Wrong",
          text: err.response.data.message
        });
      })
    },
  }

})
