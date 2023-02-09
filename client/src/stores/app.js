import { defineStore } from "pinia";
import axios from "axios";

export const useAppStore = defineStore("app", {
  state: () => ({
    baseUrl: "https://hafood-production.up.railway.app",
    // baseUrl: "http://localhost:3000",
    apiNinjaUrl: "https://api.api-ninjas.com/v1",
    apiNinjaKey: "+syPMONOQl4oaKRKwXbvWw==3cUcTPzERBbf4OkF",
    pixabayUrl: "https://pixabay.com",
    pixabayKey: "2931752-0d67f97ee14ba1f93a46a76b6",
    isLogin: false,
    recipes: [],
    recipe: {},
    nutritions: [],
    Toast: Swal.mixin({
      toast: true,
      position: "top-right",
      width: "auto",
      customClass: {
        popup: "colored-toast",
      },
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    }),
  }),
  getters: {},
  actions: {
    async doLogin(dataForm) {
      try {
        const { data } = await axios({
          method: "post",
          url: `${this.baseUrl}/login`,
          data: dataForm,
        });
        localStorage.setItem("access_token", data.access_token);
        this.isLogin = true;
        this.router.push("/");
        await this.Toast.fire({
          color: "#73C9B4",
          iconColor: "#73C9B4",
          icon: "success",
          title: "Login success",
        });
      } catch (error) {
        console.log(error);
        await this.Toast.fire({
          color: "#F46C84",
          iconColor: "#F46C84",
          icon: "error",
          title: `${error.response.data.message}`,
        });
      }
    },
    async doLogout() {
      try {
        localStorage.removeItem("access_token");
        this.isLogin = false;
        this.router.push("/login");
        await this.Toast.fire({
          color: "#73C9B4",
          iconColor: "#73C9B4",
          icon: "success",
          title: "Logged out",
        });
      } catch (error) {
        console.log(error);
        await this.Toast.fire({
          color: "#F46C84",
          iconColor: "#F46C84",
          icon: "error",
          title: `${error.response.data.message}`,
        });
      }
    },
    async fetchRecipe(keyRecipe) {
      try {
        const { data: recipe } = await axios({
          method: "get",
          url: `${this.apiNinjaUrl}/recipe?query=${keyRecipe}`,
          headers: {
            "X-Api-Key": this.apiNinjaKey,
          },
        });

        // const { data: imgRecipe } = await axios({
        //   method: "get",
        //   url: `https://cors-anywhere.herokuapp.com/${this.pixabayUrl}/api?key=${this.pixabayKey}&q=pizza`,
        //   headers: {
        //     "Access-Control-Allow-Origin": "*",
        //   },
        // });
        // jika recipe baru tambah axios pixabay
        console.log(recipe);
        this.recipes = recipe;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchDetail(dataTitle) {
      try {
        // console.log(dataTitle);
        const { data } = await axios({
          method: "get",
          url: `${this.apiNinjaUrl}/recipe?query=${dataTitle}`,
          headers: {
            "X-Api-Key": this.apiNinjaKey,
          },
        });
        this.recipe = data[0];
      } catch (error) {
        console.log(error);
      }
    },
    async fetchNutrition(dataName) {
      try {
        const { data } = await axios({
          method: "get",
          url: `${this.apiNinjaUrl}/nutrition?query=${dataName}`,
          headers: {
            "X-Api-Key": this.apiNinjaKey,
          },
        });
        this.nutritions = data;
        console.log(this.nutritions);
      } catch (error) {
        console.log(error);
      }
    },
    async changeIsPurchased() {
      try {
        const { data } = axios({
          method: "patch",
          url: `${this.baseUrl}/payments`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
    async doPurchase() {
      try {
        const { data } = await axios({
          method: "post",
          url: `${this.baseUrl}/generate-midtrans-token`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });

        const callback = this.changeIsPurchased;

        window.snap.pay(data.token, {
          onSuccess: function (result) {
            /* You may add your own implementation here */
            callback();
            // console.log(result);
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
});
