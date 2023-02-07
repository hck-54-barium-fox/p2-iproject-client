import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
      state(){
        return{
          isAuth: false
        }
      },
  })

