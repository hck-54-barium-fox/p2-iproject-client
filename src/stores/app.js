import axios from "axios";
import { defineStore } from "pinia";
import { useToast } from "vue-toastification";

const toast = useToast();
const baseUrl = "https://barium-iproject-production.up.railway.app";

export const useAppStore = defineStore("app", {
  state: () => ({
    productList: [],
    bookMarkList: [],
    productDetail: [],
    myProfile: {},
    isLogin: localStorage.getItem("access_token") ? true : false,
  }),
  getters: {},
  actions: {
    toastSuccess(value) {
      toast.success(`${value}`);
    },
    toastError(value) {
      toast.error(`${value}`);
    },
    async registerCust(param) {
      try {
        await axios({
          method: "POST",
          url: `${baseUrl}/customers/register`,
          data: param,
        });
        this.toastSuccess("Register successfully");
        this.router.replace("/");
      } catch (err) {
        this.toastError(err.response.data.message);
      }
    },

    async doLogin(param) {
      try {
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/customers/login`,
          data: param,
        });
        this.isLogin = true;
        localStorage.setItem("access_token", data.token);
        this.getMyProfile();
        this.toastSuccess("Login successfully");
        this.router.push("/");
      } catch (err) {
        this.toastError(err.response.data.message);
      }
    },

    doLogout() {
      localStorage.clear();
      this.isLogin = false;
      this.bookMarkList = [];
      this.router.replace("/login");
    },

    async fetchProduct(query) {
      console.log(query);
      try {
        const { page } = query;
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/products/?page=${page}`,
        });
        this.productList = data;
      } catch (err) {
        this.toastError(err.response.data.message);
      }
    },

    async fetchProductById(id) {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/products/${id}`,
        });
        this.productDetail = data;
      } catch (err) {
        this.toastError(err.response.data.message);
      }
    },

    async addBookmark(productId) {
      try {
        await axios.post(
          `${baseUrl}/bookmarks/${productId}`,
          {},
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        this.toastSuccess("Success add bookmark");
      } catch (err) {
        this.toastError(err.response.data.message);
      }
    },

    async fetchBookmarkList() {
      try {
        const { data } = await axios.get(`${baseUrl}/bookmarks`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.bookMarkList = data;
      } catch (err) {
        this.toastError(err.response.data.message);
      }
    },

    async deleteBookmark(id) {
      try {
         await axios({
          method: "delete",
          url: `${baseUrl}/bookmarks/${id}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.fetchBookmarkList();
        this.toastSuccess("Success cancel this bookmark");
      } catch (err) {
        this.toastError(err.response.data.message);
      }
    },

    async getMyProfile() {
      try {
        const { data } = await axios.get(`${baseUrl}/customers/me`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.myProfile = data;
      } catch (err) {
        this.toastError(err.response.data.message);
      }
    },

    async updateMyProfile(data) {
      const formData = new FormData();
      formData.append("username", data.username);
      formData.append("email", data.email);
      formData.append("id", data.id);
      formData.append("phoneNumber", data.phoneNumber);
      if (typeof data.address !== "string") {
        formData.append("address", data.address);
      }
      try {
        await axios.put(`${baseUrl}/customers/me`, formData, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.getMyProfile();
        this.toastSuccess("Success update your profile");
      } catch (err) {
        this.toastError(err.response.data.message);
      }
    },

    async payment(id) {
      try {
        const { data } = await axios.post(
          `${baseUrl}/bookmarks/checkout/${id}`,
          {},
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );

        const cb = this.successPayment;

        window.snap.pay(data.token, {
          onSuccess: function () {
            /* You may add your own implementation here */
            alert("payment success!");
            cb(id);
          },
          onPending: function (result) {
            /* You may add your own implementation here */
            alert("wating your payment!");
            console.log(result);
          },
          onError: function (result) {
            /* You may add your own implementation here */
            alert("payment failed!");
            console.log(result);
          },
          onClose: function () {
            /* You may add your own implementation here */
            alert("you closed the popup without finishing the payment");
          },
        });
      } catch (err) {
        this.toastError(err.response.data.message);
      }
    },

    async successPayment(id) {
      try {
        await axios.patch(
          `${baseUrl}/bookmarks/checkout`,
          { id },
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        this.fetchBookmarkList();
        this.toastSuccess("Success to payment this product");
      } catch (err) {
        this.toastError(err.response.data.message);
      }
    },
  },
});
