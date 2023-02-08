import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
    states: {
        landmarkList: [],
        bookmarkList: [],
        loginStatus: !!localStorage.getItem('access_token')
    },
    getters: {},
    actions: {}
})
