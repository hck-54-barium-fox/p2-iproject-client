<script>
import { mapActions,mapState } from 'pinia';
import { useAppStore } from '../stores/app';
export default {
    data() {
        return {
            userData:{
                email:"",
                password:""
            }
        }
    },
    methods: {
        ...mapActions(useAppStore,['login'])
    },
}
</script>
<template>
    <div class="w-auto h-screen">
            <img
                src="https://wallpapers-hub.art/wallpaper-images/234084.jpg"
                class="absolute top-0 -z-10 w-full h-screen object-cover"
                alt=""
            />
            <div class="w-full h-screen flex justify-end">
                <div
                    class="w-[500px] h-[100%] bg-transparent flex justify-center items-center"
                >
                    <div class="items-center mr-[50px]">
                        <h1 class="text-white text-center text-4xl mb-[70px]">LOGIN PAGE</h1>
                        <div class="flex gap-4">
                            <form action="" class="flex flex-col gap-7" @submit.prevent="login(userData)">
                                <div class="">
                                    <label
                                        for="exampleInputEmail1"
                                        class="form-label inline-block mb-2 text-gray-700"
                                    ></label>
                                    <input
                                        v-model="userData.email"
                                        type="email"
                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none w-[400px] h-[50px]"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter email"
                                    />
                                </div>
                                <div class="form-group mb-[20px]">
                                    <label
                                        for="exampleInputEmail12"
                                        class="form-label inline-block mb-2 text-gray-700"
                                    ></label>
                                    <input
                                        v-model="userData.password"
                                        type="password"
                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none w-[400px] h-[50px]"
                                        id="exampleInputEmail12"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter password"
                                    />
                                </div>
                                <div class="bg-red h-[50px] w-full flex justify-center items-center">
                                    <button class="text-white w-full bg-cyan-600 h-[100%] rounded-xl" >Submit</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
</template>

<style>
    
</style>