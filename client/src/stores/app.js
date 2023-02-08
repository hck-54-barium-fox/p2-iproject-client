import { defineStore } from "pinia";
import axios from "axios"

let base_url = "http://localhost:3000"

export const useAppStore = defineStore('app',{
    state : ()=>({
        planets : []
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
                this.planets = data
                console.log(data)
            } catch (err) {
                console.log(err)
            }
        },
        logout(){
            localStorage.removeItem("access_token")
            this.router.push("/login")
        },
        async registerUser(payload){
            try {
                const{data} = await axios({
                    method:'post',
                    url:`${base_url}/register`,
                    data: payload
                })
                console.log(data)
                this.router.push("/login")
            } catch (err) {
                console.log(err)
            }
        }
    },
    getters:{}
})