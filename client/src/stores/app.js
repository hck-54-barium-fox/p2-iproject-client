import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const url ='http://localhost:1812'



export const useAppStore = defineStore('app', {
    
    state: () => ({

        isLogin: false,
         games :[]

    }),
    getters: {},
    actions: {
        async doLogin(form) {
            try {
               console.log(form,'iniii');
            let {data} = await axios({
                method:"POST",
                url:`${url}/login`,
                data:form
            })
            console.log(data,"ini token");
            localStorage.setItem('access_token',data.access_token)
            
            this.isLogin =true
            this.router.push('/home')
            } catch (err) {
                console.log(err);
            }
        },
        doLogout(){
            localStorage.removeItem('access_token')
       
            this.isLogin = false
            this.router.push('/login')
        },
        async fetchGames(){
            try{
            let {data} = await axios({
                method:"GET",
                url:`${url}/games`
            })
            this.games= data

            }catch(err){
                console.log(err);
            }
        }
    }

}
)
