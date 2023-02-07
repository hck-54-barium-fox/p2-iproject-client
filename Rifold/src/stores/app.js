
import { defineStore } from 'pinia'
import axios from 'axios'
// import { useToast } from 'vue-toastification'
// const toast = useToast()
const BASE_URL = 'http://localhost:3000'
export const useAppStore = defineStore('App',{
    state() {
        return{
            dataProduct : [],
           productDetail : []
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
        }
    }
})