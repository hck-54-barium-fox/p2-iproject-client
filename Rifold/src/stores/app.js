
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
           totalHarga : 0
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
                this.router.push({name:'home'})
            } catch (error) {
                console.log(error);
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
                console.log(error);
            }
        },
        logout() {
            localStorage.clear()
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
                // const {data} = await 
            } catch (error) {
                
            }
        }
    }
})