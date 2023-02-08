import { defineStore } from "pinia";
import axios from "axios";

export const useAppStore = defineStore("app", {
  state: () => ({
    baseUrl: "http://localhost:3000",
    apiNinjaUrl: "https://api.api-ninjas.com/v1",
    apiNinjaKey: "+syPMONOQl4oaKRKwXbvWw==3cUcTPzERBbf4OkF",
    pixabayUrl: "https://pixabay.com",
    pixabayKey: "2931752-0d67f97ee14ba1f93a46a76b6",
    isLogin: false,
    recipes: [],
    recipe: {},
    nutritions: [],
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
      } catch (error) {
        console.log(error);
      }
    },
    async doLogout() {
      try {
        localStorage.removeItem("access_token");
        this.isLogin = false;
        this.router.push("/login");
      } catch (error) {
        console.log(error);
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

        const { data: imgRecipe } = await axios({
          method: "get",
          url: `https://cors-anywhere.herokuapp.com/${this.pixabayUrl}/api?key=${this.pixabayKey}&q=${keyRecipe}`,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        });
        // jika recipe baru tambah axios pixabay
        console.log(recipe, imgRecipe);
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
  },
});
