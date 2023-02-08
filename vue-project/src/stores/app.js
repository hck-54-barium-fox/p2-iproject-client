import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
export const useAppStore = defineStore('app', {
    state: () => ({
        news: [],
      favorite: [],
        isLogin: false,
      }),
      actions:{
        async login(loginData){
            // console.log(loginData);
            try {
                const {data} = await axios({
                    url: `http://localhost:3000/login`,
                    method: 'post',
                    data: loginData
                }) 
                localStorage.setItem("access_token", data.access_token)
                this.readData()
                this.isLogin = true
                this.$router.push('/HomePage')
            } catch (error) {
                console.log(error, `<<<<<<`);
            }
        },
        logout(){
            localStorage.removeItem("access_token")
            this.isLogin = false
            this.$router.push('/')
        },
        async readData(){
            try {
                const data = await axios({
                    url: `http://localhost:3000/getNews`,
                    method: 'get',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                this.news = data
                // console.log(this.news, `<<<<<<<<<<<<`)
            } catch (error) {
                console.log(error)
            }
        },
        async register(result){
            try {
                const { data } = await axios({
                    url: "http://localhost:3000/register",
                    method: "post",
                    data: {
                      name: result.name,
                      email: result.email,
                      password: result.password,
                    },
                    headers: {
                      access_token: localStorage.access_token,
                    },
                  });
                  this.$router.push("/");
            } catch (error) {
                console.log(error);
            }
        },
        async bookmarks(result){
            try {
              const {data} = await axios({
                url:`http://localhost:3000/bookmarks`,
                method:'post',
                data: {
                  title: result.title,
                  description: result.description,
                  source: result.source,
                  theme: result.theme
                },
                headers:{
                  access_token: localStorage.getItem("access_token")
                }
              })
            } catch (error) {
                console.log(error);
            }
          },
          async myNews(){
            try {
              const {data} = await axios({
                url: `http://localhost:3000/myNews`,
                method: "get",
                headers:{
                  access_token: localStorage.access_token
                }
              })
              this.favorite = data
              console.log(this.favorite, `<<<<<<<<INI<<<<`);
            } catch (error) {
              console.log(error);
            }
          },
      }
})