import { defineStore } from "pinia";
import axios from 'axios'
const server = 'http://localhost:4000'

export const useAppStore = defineStore('app', {
    state : ()=>({
            isLogin : false,
            products : [],
            tree : 0,
            carbon : 0
    }),
    getters : {},
    actions : {

        async doRegister(payload){
            try {
                console.log(payload)

                let {data} = await axios({
                    method : 'post',
                    url : `${server}/register`,
                    data  : payload
                })
                // console.log(data)
                // console.log(data)
                Swal.fire({
                    icon: "success",
                    title: "Good Job!",
                    text: "Now you can login to your account",
                  });
                  this.router.push("/login");
            } catch (error) {
                // console.log(error)
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.response.data.message,
                    footer: "Try Again :)",
                  });
            }
        },

        async doLogin(payload){
            try {
                console.log(payload, 'PAYLOAD LOGIN')
                let {data} = await axios({
                    method : 'post',
                    url: `${server}/login`,
                    data : payload
                })
                localStorage.setItem('access_token', data.access_token)
                this.isLogin = true
                this.router.push('/products')
                console.log(data.access_token, 'INI ACC TOKEN')
            } catch (error) {
                // console.log(error, 'ERRR LOGIN')
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.response.data.message,
                    footer: "Try Again :)",
                  });
            }
        },

        async fetchProduct(){
            try {
                let {data} = await axios({
                    method : 'get',
                    url :  `${server}/products`,
                    headers : {
                        access_token : localStorage.getItem('access_token')
                    }
                })

                console.log(data, 'INI DATA')
                this.products = data
            } catch (error) {
                console.log(error)
            }
        },

        async calculateTobbaco(payload){
            try {
                console.log(payload)

                let {data} = await axios({
                    method : 'post',
                    url : `${server}/carbon/tobbaco`,
                    data : payload
                })

                console.log(data.time, 'INI HASIL')

                this.tree = data.time
                this.carbon = data.co2
                // pindah ke halaman tree
                this.router.push('/result')
            } catch (error) {
                console.log(error)
            }
        },
        async calculateEmission(distance){
            try {
                console.log(distance)

                let {data} = await axios({
                    method : 'post',
                    url : `${server}/carbon/vehicle`,
                    data : {distance :  distance},
                    
                })

                console.log(data)
                console.log(data.time, 'INI HASIL')

                this.tree = data.time
                this.carbon = data.co2
                this.router.push('/result')
                // pindah ke halaman tree
            } catch (error) {
                console.log(error)
            }
        },

        async createPayment(id){
            try {
                console.log(id)

                let {data} = await axios({
                    method : 'post',
                    url : `${server}/products/payment/${id}`,
                    headers : {
                        access_token : localStorage.getItem('access_token')
                    }
                })

                // console.log(data.redirect_url, 'INI URL PAYMENT')
                window.snap.pay(data.token, {
                    onSuccess: function(result){
                      /* You may add your own implementation here */
                    //   alert("payment success!"); console.log(result);
                    Swal.fire({
                        icon: "success",
                        title: "Good Job!",
                        text: "Payment success. Thank you for your donation :)",
                      });
                    },
                    onPending: function(result){
                      /* You may add your own implementation here */
                    //   alert("wating your payment!"); console.log(result);
                   
                    },
                    onError: function(result){
                      /* You may add your own implementation here */
                    //   alert("payment failed!"); console.log(result);
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: " Failed create Payment",
                        footer: "Try Again :)",
                      });
                    },
                    onClose: function(){
                      /* You may add your own implementation here */
                    //   alert('you closed the popup without finishing the payment');
                    Swal.fire(
                        'Are you sure?',
                        'Want to close this payment??',
                        'question'
                      )
                    }
                  })

            } catch (error) {
                console.log(error)
            }
        },

        async doLogout() {
            localStorage.clear();
            this.router.push("/");
            this.isLogin = false;
          },
        
    }

})

