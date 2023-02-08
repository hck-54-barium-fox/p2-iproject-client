<script>    
    import Button from '../components/Button.vue';    
    import { mapActions } from 'pinia';
    import { useCounterStore } from '../stores/counter';
    import Navbar from '../components/Navbar.vue'

    export default{
        data(){
            return {
                username: '',
                email: '',
                password: '',
                emailLogin: '',
                passwordLogin: ''
            }
        },
        methods: {
            ...mapActions(useCounterStore, ['registerHandler', 'login', 'googleLogin']),
            handleRegister(){
                console.log(this.username)
                this.registerHandler({
                    username: this.username,
                    email: this.email,
                    password: this.password
                })
                this.username = ''
                this.email = ''
                this.password = ''
            },
            handleLogin(){
                this.login({
                    email: this.emailLogin,
                    password: this.passwordLogin
                })
            },
            callback(res){
                console.log(res, '<<<< RES GOOGLE LOGIN');
                this.googleLogin(res)
            }
        },
        components: {
            Button,
            Navbar
        }
    }
</script>

<template>
    <Navbar/>
    <section class="samplePage App-header">
        <div class="mt-20">
            <div class="flex justify-center mt-3 mb-3">
                <h1 class="text-3xl font-bold mr-3 my-auto  ">Welcome to </h1>
                <img src="../assets/CPWCPP.png" alt="logo" width="110"/>
            </div>            
        </div>
        <div class="md:flex md:justify-evenly mt-3">
            <!-- SIGN UP -->
            <div class="text-left mx-5 md:w-3/12">
                <h2 class="text-3xl font-semibold">Sign up and enjoy</h2>
                <form @submit.prevent="handleRegister" class="py-4">
                    <span class="flex justify-between">
                        <label for="username" class="font-thin">Username</label>
                        <span class="text-red-500 font-semibold text-xl">*</span>
                    </span>
                    <input v-model="username" type="text" placeholder="Enter your username..." class="text-[#1e242b] border-2 rounded-md w-full h-11 p-2 mb-3 bg-slate-100 dark:border-gray-500">

                    <span class="flex justify-between">
                        <label for="email" class="font-thin">Email</label>
                        <span class="text-red-500 font-semibold text-xl">*</span>
                    </span>
                    <input v-model="email" type="email" placeholder="Enter email address..." class="text-[#1e242b] border-2 rounded-md w-full h-11 p-2 mb-3 bg-slate-100 dark:border-gray-500">

                    <span class="flex justify-between">
                        <label for="password" class="font-thin">Password</label>
                        <span class="text-red-500 font-semibold text-xl">*</span>
                    </span>
                    <input v-model="password" type="password" placeholder="Enter your password..." class="text-[#1e242b] border-2 rounded-md w-full h-11 p-2 mb-3 bg-slate-100 dark:border-gray-500">
                                        

                    <Button size="large" label="Sign Up"/>

                    <!-- <button type="submit" class="bg-primary-btn dark:bg-dark-btn text-white font-bold w-full h-14 rounded-3xl">Sign Up</button> -->
                </form>
            </div>
            <!-- End SIGN UP -->
            
            <!-- LOG IN -->
            <div class="text-left mx-5 md:w-3/12">
                <h2 class="text-3xl font-semibold">Log in to your account</h2>
                <p class="py-4 font-thin">Log in on your profile to autocomplete your purchase order with your personal data.</p>
                <form @submit.prevent="handleLogin">
                    <span class="flex justify-between">
                        <label for="username" class="font-thin">Email</label>
                        <span class="text-red-500 font-semibold text-xl">*</span>
                    </span>
                    <input v-model="emailLogin" type="email" placeholder="Enter email address..." class="text-[#1e242b] border-2 rounded-md w-full h-11 p-2 mb-3 bg-slate-100 dark:border-gray-500">

                    <span class="flex justify-between">
                        <label for="username" class="font-thin">Password</label>
                        <span class="text-red-500 font-semibold text-xl">*</span>
                    </span>
                    <input v-model="passwordLogin" type="password" placeholder="Enter your password..." class="text-[#1e242b] border-2 rounded-md w-full h-11 p-2 mb-3 bg-slate-100 dark:border-gray-500">                                        
                    
                    <Button size="large" label="Log In"/>                    

                    <p class="py-4 text-center">or Sign In With</p>

                    <div id="googleLogin" class="text-center">
                        <GoogleLogin :callback="callback"/>
                    </div>
                </form>
            </div>
            <!-- End LOG IN -->
        </div>
    </section>
</template>