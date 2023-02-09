<script>
import { useAppStore } from "../stores/app"
import { mapActions, mapState } from "pinia"
export default {
    methods: {
        ...mapActions(useAppStore, ["logout"]),
    },
    computed: {
        ...mapState(useAppStore, ["userStatus"]),
    },
    data() {
        return {
            status: localStorage.getItem("status")
        }
    },
}
</script>
<template>
    <nav
        class="bg-transparent border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900"
    >
        <div
            class="container flex flex-wrap items-center justify-between mx-auto"
        >
            <a href="#" class="flex items-center">
                <span
                    class="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-white mt-4"
                    >Solaris</span
                >
            </a>
            <div class="w-full block md:w-auto">
                <ul
                    class="flex flex-col p-4 mt-4 text-white bg-transparent md:flex-row md:space-x-8 ml-3"
                >
                    <li>
                        <a
                            @click.prevent="this.$router.push('/')"
                            href="#"
                            class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-white"
                            aria-current="page"
                            >Home</a
                        >
                    </li>
                    <li>
                        <a
                            v-if="status === 'premium'"
                            href="#"
                            @click.prevent="this.$router.push('/apod')"
                            class="block py-2 pl-3 pr-4 text-gray-700 rounded md:text-white md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >APOD</a
                        >
                    </li>
                    <li>
                        <a
                            v-if="status === 'standard'"
                            @click.prevent="this.$router.push('/subscribe')"
                            href="#"
                            class="block py-2 pl-3 pr-4 text-gray-700 rounded md:text-white md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >Subscribe</a
                        >
                    </li>
                    <li>
                        <a
                            @click.prevent="logout()"
                            href="#"
                            class="block py-2 pl-3 pr-4 text-gray-700 rounded md:text-white md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >Logout</a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style></style>
