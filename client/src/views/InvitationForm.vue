<script>
    import Navbar from '../components/Navbar.vue'
    import Button from '../components/Button.vue';
    import { mapActions, mapState } from 'pinia';
    import { useCounterStore } from '../stores/counter';

    export default{
        computed: {
            ...mapState(useCounterStore, ['quote'])
        },
        components: {
            Navbar,
            Button
        },
        methods: {
            ...mapActions(useCounterStore, ['generateQuotes'])
        },
        created(){
            this.generateQuotes()
        }
    }
</script>

<template>
    <Navbar/>

    <section class="App-header">
        <div class="flex">            
            <div class="text-left">
                <h2 class="text-3xl font-semibold text-center mt-20">Fill Your Data</h2>
                <form @submit.prevent="handleRegister" class="py-4 w-96">
                    <!-- Route Name -->
                    <span class="flex justify-between">
                        <label for="username" class="font-thin">Invitation Web Name</label>
                        <span class="text-red-500 font-semibold text-xl">*</span>
                    </span>
                    <input v-model="routeName" type="text" placeholder="ex. romeojuliet" class="text-[#1e242b] border-2 rounded-md w-full h-11 p-2 bg-slate-100 dark:border-gray-500">
                    <label class="text-base font-thin -translate-y-3 pl-1 inline-block">it will look like this : cppcpw.com/<span class="font-semibold">romeojuliet</span></label>

                    <!-- CPW -->
                    <span class="flex justify-between">
                        <label for="email" class="font-thin">CPW</label>
                        <span class="text-red-500 font-semibold text-xl">*</span>
                    </span>
                    <input v-model="cpw" type="email" placeholder="Nama Calon Pengantin Wanita" class="text-[#1e242b] border-2 rounded-md w-full h-11 p-2 mb-3 bg-slate-100 dark:border-gray-500">

                    <!-- CPP -->
                    <span class="flex justify-between">
                        <label for="password" class="font-thin">CPP</label>
                        <span class="text-red-500 font-semibold text-xl">*</span>
                    </span>
                    <input v-model="cpp" type="password" placeholder="Nama Calon Pengantin Pria" class="text-[#1e242b] border-2 rounded-md w-full h-11 p-2 mb-3 bg-slate-100 dark:border-gray-500">

                    <!-- Wedding Day -->
                    <span class="flex justify-between">
                        <label for="password" class="font-thin">Wedding Day</label>
                        <span class="text-red-500 font-semibold text-xl">*</span>
                    </span>
                    <input v-model="weddingDay" type="date" class="text-[#1e242b] border-2 rounded-md w-full h-11 p-2 mb-3 bg-slate-100 dark:border-gray-500">

                    <!-- Greeting -->
                    <span class="flex justify-between">
                        <label for="password" class="font-thin">Greetings</label>
                        <span class="text-red-500 font-semibold text-xl">*</span>
                    </span>
                    <textarea v-model="greeting" type="date" class="text-[#1e242b] border-2 rounded-md w-full p-2 mb-3 bg-slate-100"></textarea>

                    <!-- Akad Start & Akad End -->
                    <div class="flex gap-11">
                        <div>
                            <span class="flex justify-between">
                                <label for="password" class="font-thin">Akad Start</label>
                                <span class="text-red-500 font-semibold text-xl">*</span>
                            </span>
                            <input v-model="akadStart" type="time" class="text-[#1e242b] border-2 rounded-md w-full h-11 p-2 mb-3 bg-slate-100 dark:border-gray-500">
                        </div>
                        <div>
                            <span class="flex justify-between">
                                <label for="password" class="font-thin">Akad End</label>
                                <span class="text-red-500 font-semibold text-xl">*</span>
                            </span>
                            <input v-model="akadEnd" type="time" class="text-[#1e242b] border-2 rounded-md w-full h-11 p-2 mb-3 bg-slate-100 dark:border-gray-500">
                        </div>
                    </div>

                    <!-- Resepsi Start & Resepsi End -->
                    <div class="flex gap-11">
                        <div>
                            <span class="flex justify-between">
                                <label for="password" class="font-thin">Resepsi Start</label>
                                <span class="text-red-500 font-semibold text-xl">*</span>
                            </span>
                            <input v-model="resepsiStart" type="time" class="text-[#1e242b] border-2 rounded-md w-full h-11 p-2 mb-3 bg-slate-100 dark:border-gray-500">
                        </div>
                        <div>
                            <span class="flex justify-between">
                                <label for="password" class="font-thin">Resepsi End</label>
                                <span class="text-red-500 font-semibold text-xl">*</span>
                            </span>
                            <input v-model="resepsiEnd" type="time" class="text-[#1e242b] border-2 rounded-md w-full h-11 p-2 mb-3 bg-slate-100 dark:border-gray-500">
                        </div>
                    </div>

                    <!-- Location -->
                    <span class="flex justify-between">
                        <label for="password" class="font-thin">Wedding Location</label>
                        <span class="text-red-500 font-semibold text-xl">*</span>
                    </span>
                    <input v-model="location" type="url" placeholder="Your wedding location" class="text-[#1e242b] border-2 rounded-md w-full h-11 p-2 mb-3 bg-slate-100">

                    <!-- Quotes -->
                    <span class="flex justify-between">
                        <label for="password" class="font-thin py-1">Quotes</label>
                        <button @click="generateQuotes" class="text-red-500 font-semibold text-xl p-1 bg-twitter rounded-md my-2">Generate Quote</button>
                    </span>
                    <div class="bg-primary h-32 rounded-md border-2 border-solid border-tiktok overflow-y-auto mb-3">
                        <p class="text-tiktok p-3 text-lg">{{ quote[0].quote }}</p>
                    </div>
                    <!-- <input v-model="weddingDay" type="text" class="text-[#1e242b] border-2 rounded-md w-full h-32 p-2 mb-3 bg-slate-100 dark:border-gray-500"> -->

                    <Button size="large" label="Submit"/>

                    <!-- <button type="submit" class="bg-primary-btn dark:bg-dark-btn text-white font-bold w-full h-14 rounded-3xl">Sign Up</button> -->
                </form>
            </div>            
        </div>
    </section>
</template>