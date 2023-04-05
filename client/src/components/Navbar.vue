<script>
import { mapActions, mapWritableState } from 'pinia';
import { usePoemStore } from '../stores/poem';
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
export default {

    methods: {
        handleLogout() {
            localStorage.removeItem("username");
            localStorage.removeItem("email");
            localStorage.removeItem("access_token");
            toast.success('Logout Succesful!');
            this.isLogin = false
            this.$router.push('/login')
        }
    },
    computed: {
        ...mapWritableState(usePoemStore, ['isLogin'])
    }
}
</script>

<template>
    <!-- Navbar -->
    <section>

        <div class="navbar bg-black w-[204vh]">
            <div class="navbar-start">

                <img src="../assets/logo.png" class="h-10 w-12 ml-5" alt="logo sts">
                <a class="btn btn-ghost normal-case text-2xl font-bold"
                    @click="this.$router.push('/')">SomethingToSay</a>
            </div>

            <li class="cursor-pointer hover:bg-white rounded ml-16 whitespace-nowrap"
                @click="this.$router.push('/api')"><a>API Docs</a></li>
                <li class="cursor-pointer hover:bg-white rounded ml-5 whitespace-nowrap"
                @click="this.$router.push('/about')"><a>About</a></li>
            <li class="cursor-pointer hover:bg-white rounded ml-5 whitespace-nowrap"
                @click="this.$router.push('/myletter')"><a>My Letter</a></li>
            <div class="navbar-end ml-[90vh]">
                <ul class="flex">
                    <li class="cursor-pointer hover:bg-white rounded whitespace-nowrap" v-if="this.isLogin === false"
                        @click="this.$router.push('/login')">
                        <a>Login</a>
                    </li>
                    <li class="cursor-pointer hover:bg-white rounded whitespace-nowrap" v-if="this.isLogin === true"
                        @click="handleLogout"><a>Log Out</a></li>
                </ul>
            </div>
            <div class="navbar-end ">
                <a class="btn" @click.prevent="this.$router.push('/')">Get started</a>
            </div>
        </div>
    </section>
</template>