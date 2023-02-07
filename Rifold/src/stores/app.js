
import { defineStore } from 'pinia'
import axios from 'axios'
// import { useToast } from 'vue-toastification'
// const toast = useToast()
export const useAppStore = defineStore('App',{
    // state : {

    // },
    state() {
        return{

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
        }
    }
})