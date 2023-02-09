import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const URL = "https://individualproject-production-da6f.up.railway.app"
// const URL = "http://localhost:3000"


export const useAppStore = defineStore('app', ({
  state: () => ({
    usersBmi: {},
    bodyPartList: [],
    equipmentList: [],
    exerciseByBodyPart: [],
    exerciseByEquipment: [],
    trainers: [],
    myExercise: [],
    isLogin: false
  }),
  getters: {},
  actions: {
    async doLogin(form) {
      try {
        const { data } = await axios({
          method: 'post',
          url: `${URL}/login`,
          data: form
        })
        localStorage.setItem('access_token', data.token)
        this.router.push('/home')
        this.isLogin = true
      } catch (error) {
        console.log(error)
      }
    },
    async doRegister(form) {
      try {
        const data = await axios({
          method: 'post',
          url: `${URL}/register`,
          data: form
        })
        this.router.push('/login')
      } catch (error) {
        console.log(error)
      }
    },
    async getBmi() {
      try {
        const { data } = await axios({
          method: 'get',
          url: `${URL}/getbmi`,
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        this.usersBmi = data
      } catch (error) {
        console.log(error)
      }
    },
    async getBodyPart() {
      try {
        const { data } = await axios({
          method: 'get',
          url: `${URL}/listofbodypart`,
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        this.bodyPartList = data
      } catch (error) {
        console.log(error)
      }
    },
    async fetchByBodyPart(bodyPart) {
      try {
        const { data } = await axios({
          method: 'get',
          url: `${URL}/exercisebybodypart`,
          headers: {
            access_token: localStorage.getItem("access_token")
          },
          params: {
            bodyPart: bodyPart
          }
        })
        this.exerciseByBodyPart = data
      } catch (error) {
        console.log(error)
      }
    },
    async getEquipment() {
      try {
        const { data } = await axios({
          method: 'get',
          url: `${URL}/listofequipment`,
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        this.equipmentList = data
      } catch (error) {
        console.log(error)
      }
    },
    async fetchByBodyEquipment(equipment) {
      try {
        const { data } = await axios({
          method: 'get',
          url: `${URL}/exercisebyequipment`,
          headers: {
            access_token: localStorage.getItem("access_token")
          },
          params: {
            equipment: equipment
          }
        })
        this.exerciseByBodyPart = data
      } catch (error) {
        console.log(error)
      }
    },
    async getTrainer() {
      try {
        const { data } = await axios({
          method: 'get',
          url: `${URL}/trainer`,
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        this.trainers = data
      } catch (error) {
        console.log(error)
      }
    },
    async hirePt(id) {
      try {
        const { data } = await axios({
          method: 'post',
          url: `${URL}/midtrans-token`,
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        window.snap.pay(data.token, {
          onSuccess: function (result) {
            /* You may add your own implementation here */
            alert("payment success!"); console.log(result);
          },
          onPending: function (result) {
            /* You may add your own implementation here */
            alert("wating your payment!"); console.log(result);
          },
          onError: function (result) {
            /* You may add your own implementation here */
            alert("payment failed!"); console.log(result);
          },
          onClose: function () {
            /* You may add your own implementation here */
            alert('you closed the popup without finishing the payment');
          }
        })
      } catch (error) {
        console.log(error)
      }
    },
    async addToMyExercise(exercise) {
      try {
        await axios({
          method: 'post',
          url: `${URL}/addmyexercise`,
          data: {
            bodyPart: exercise.bodyPart,
            equipment: exercise.equipment,
            gifUrl: exercise.gifUrl,
            name: exercise.name,
            target: exercise.target
          },
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        Swal.fire(`${exercise.name} added to your exercise`)
      } catch (error) {
        console.log(error)
      }
    },
    async fetchMyExercise() {
      try {
        const { data } = await axios({
          method: 'get',
          url: `${URL}/myexercise`,
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        this.myExercise = data
      } catch (error) {
        console.log(error)
      }
    }
  }
}))
