import { defineStore } from "pinia";
import axios from "axios"

let base_url = "http://localhost:3000"

export const useAppStore = defineStore('app',{
    state : ()=>({

    }),
    actions:{
        async login(payload){
            try {
                let {data} = await axios({
                    method:'post',
                    url : `${base_url}/login`,
                    data:payload
                })
                console.log(data)
                localStorage.setItem("access_token",data.access_token)
                this.router.push("/")
            } catch (err) {
                console.log(err)
            }
        },
        async fetchPlanet(){
            try {
                const {data} = await axios({
                    method:'get',
                    url:`${base_url}/planets`,
                    headers:{
                        access_token:localStorage.getItem("access_token")
                    }
                })
                console.log(data)
            } catch (err) {
                
            }
        }
    },
    getters:{}
})