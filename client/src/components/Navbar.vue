<script>
import { mapActions, mapWritableState } from 'pinia';
import { usePoemStore } from '../stores/poem';
export default {

    methods: {
        handleLogout() {
            localStorage.removeItem("username");
            localStorage.removeItem("email");
            localStorage.removeItem("access_token");
            this.isLogin = false
            this.$route.push('/')
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

        <div class="navbar bg-black">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>

                </div>
                <a class="btn btn-ghost normal-case text-2xl font-bold">SomethingToSay</a>
            </div>

            <li class="cursor-pointer hover:bg-white rounded ml-5 whitespace-nowrap"><a>About Us</a></li>
            <div class="navbar-end ml-[110vh]">
                <ul class="flex mr-10">
                    <li class="cursor-pointer hover:bg-white rounded" v-if="this.isLogin === false" @click="this.$router.push('/login')">
                        <a>Login</a></li>
                    <li class="cursor-pointer hover:bg-white rounded"  v-if="this.isLogin === true" @click="handleLogout"><a>Log Out</a></li>
                </ul>
            </div>
            <div class="navbar-end">
                <a class="btn" @click.prevent="this.$router.push('/')">Get started</a>
            </div>
        </div>
    </section>
</template>