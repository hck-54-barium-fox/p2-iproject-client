
import { defineStore } from 'pinia'
import axios from 'axios'
// import { useToast } from 'vue-toastification'
// const toast = useToast()
const BASE_URL = 'http://localhost:3000'
export const useAppStore = defineStore('App',{
    state() {
        return{
            dataProduct : [],
           productDetail : [],
           MYProduct : {},
           totalHarga : 0,
           dataProvince : [],
           dataCity : [],
           cost : [],
           totalOngkir : 0,
           isLogin : localStorage.access_token
        }
    },
    actions : {
        async Register(result) {
            console.log('masukk');
            try {
                const {data} = await axios({
                    method : 'post',
                    url : 'http://localhost:3000/register',
                    data:result
                })
                this.router.push({name:'login'})
                // toast.success('successs')
                console.log(data)
            } catch (error) {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href="">Why do I have this issue?</a>'
                  })
            }
        },
        async login(result) {
            try {
                const {data} = await axios({
                    method : 'post',
                    url : 'http://localhost:3000/login',
                    data : result
                })
                localStorage.setItem('access_token',data.access_token)
                this.isLogin = localStorage.access_token
                this.router.push({name:'home'})
                Swal.fire({
                    icon: 'success',
                    title: 'success Login',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  
            } catch (error) {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.response.data.message,
                    footer: '<a href="">Why do I have this issue?</a>'
                  })
            }
        },
        async Product() {
            try {
                const {data} = await axios({
                    method : 'get',
                    url : 'http://localhost:3000/product'
                })
                this.dataProduct = data
                console.log(this.dataProduct);
            } catch (error) {
                console.log(error);
            }
        },
        async detailProduct(id) {
            try {
                const {data} = await axios({
                    method : 'get',
                    url : `${BASE_URL}/product/${id}`,
                    headers : {
                        access_token : localStorage.access_token
                    }
                })
                // console.log(data,'addda');
                this.productDetail = data
                console.log(this.productDetail);
            } catch (error) {
                console.log(error);
            }
        },
        async MyProduct(id) {
          try {
            const {data} = await axios({
                method : 'POST',
                url : `${BASE_URL}/myproduct/${id}`,
                headers : {
                    access_token : localStorage.access_token
                }
            })
            this.router.push('/myproduct')
          } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.response.data.message,
                footer: '<a href="">Why do I have this issue?</a>'
              })
          }
        },
        async readMyProduct() {
            try {
                const {data} = await axios({
                    method : 'get',
                    url : `${BASE_URL}/myproduct`,
                    headers : {
                        access_token : localStorage.access_token
                    }
                })
                this.MYProduct = data
                // this.MyProduct.forEach(el => {
                //     console.log(el.price);
                // })
                for(let i = 0; i < this.MYProduct.length; i++){
                    // console.log(this.MYProduct[i],'dari data', typeof this.MYProduct[i]);
                    // console.log(this.MYProduct[i].Product.price,'<<<<<<<<<,');
                    this.totalHarga += this.MYProduct[i].Product.price
                }
                // this.totalHarga = this.MyProduct[i].Product.price
                console.log(this.totalHarga);
            } catch (error) {
                // Swal.fire(error.response.data.message);
                console.log(error);
            }
        },
        logout() {
            localStorage.clear()
            this.isLogin = localStorage.access_token
            this.router.push('/login')
        },
        async succes() {
            try {
                const data = await axios({
                    method : 'delete',
                    url : `${BASE_URL}/myproduct`,
                    headers : {
                        access_token : localStorage.access_token
                    }

                })
                this.router.push('/')
            } catch (err) {
                
            }
        },
        async payment() {
            try {
                const {data} = await axios({
                    method : 'POST',
                    url : `${BASE_URL}/generate-midtrans-token`,
                    headers : {
                        access_token : localStorage.access_token
                    }
                })
                console.log(data);
                const cb = this.succes
                window.snap.pay(data.token, {
                    onSuccess: function(result){
                      /* You may add your own implementation here */
                      alert("payment success!"); console.log(result);
                        cb()
                        // this.router.push('/')
                    },

                
                })   
                this.MyProduct()
            } catch (error) {
                console.log(error);
            }
        },
        async getProvince() {
            try {
                const {data} = await axios({
                    method : 'get',
                    url : `${BASE_URL}/province`,
                    headers : {
                        access_token : localStorage.access_token  
                    }
                }) 
                // console.log(data,'<<<<<<<<<');
                this.dataProvince = data
            } catch (error) {
                console.log(error);
            }
        },
        async getCity(provinceId) {
            try {
                const {data} = await axios({
                    method : 'get',
                    url : `${BASE_URL}/city/${provinceId}`,
                    headers : {
                        access_token : localStorage.access_token  
                    }
                }) 
                // console.log(data,'<<<<<<<<<');
                this.dataCity = data.data
            } catch (error) {
                console.log(error);
            }
        },
        async getCost(cityId) {
            try {
              const { data } = await axios({
                method: "get",
                url: BASE_URL + "/cost?destination=" + cityId,
                headers: {
                  access_token: localStorage.access_token,
                },
              });
              this.cost = data;
              console.log(data.rajaongkir.results[0].costs[0].cost[0].value,'<<<<<<<');
              this.totalOngkir = data.rajaongkir.results[0].costs[0].cost[0].value
            } catch (error) {
              console.log(error);
            //   Swal.fire(error.response.data.message);
            }
          },
          async GoogleLogin(response) {
            console.log('masukkk');
            try {
              const {data} = await axios({
                method:'POST',
                url: `${BASE_URL}/google`,
                data : {
                  idToken: response.credential
                }
              })
              console.log(data.username,'dari dari');
              localStorage.setItem('access_token',data.access_token)
              localStorage.setItem('username',data.username)
              localStorage.setItem('role',data.role)
              this.name = data.username
              this.router.push('/')
            //   this.curentPage = 'dashboard'
              Swal.fire({
                      icon: 'success',
                      title: ` berhasil login`,
                      showConfirmButton: false,
                      timer: 5000
                  })
            //   console.log(this.nameGoogle);
            } catch (error) {
              console.log(error,'ini dari google');
            }
          },
    }
})