<script>
import Navbar from '../components/Navbar.vue';

export default {
    name: "AddFormItem",
    components: { Navbar }
}
</script>

<template>
    <main class="max-w-4xl mx-auto w-screen flex flex-col items-center justify-center">
        <Navbar />
        <header class="my-6">
            <h2 class="text-center font-semibold uppercase text-gray-300">Your StarGazer</h2>
            <p class="text-center font-extrabold text-slate-800 tracking-tight text-6xl">Item</p>
        </header>
        <form class="w-full grid gap-2 px-4">
            <div class="flex justify-between items-center">
                <label for="nominal" class="w-32 text-right pr-4 font-bold text-gray-700">Nominal</label>
                <div class="flex-1">
                    <input required placeholder="nominal" type="number" id="nominal"
                        class="w-full rounded-md appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent">
                </div>
            </div>
            <div class="flex justify-between items-center">
                <label for="price" class="w-32 text-right pr-4 font-bold text-gray-700">Price</label>
                <input placeholder="100000" type="number" id="price"
                    class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent">
            </div>
            <div class="flex justify-between items-center">
                <label for="itemUrl" class="w-32 text-right pr-4 font-bold text-gray-700">Item Url</label>
                <input placeholder="www.google.com" type="text" id="itemUrl"
                    class="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent">
            </div>
            <div
                class="flex justify-start items-center focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                <label for="UserId" class="w-32 text-right pr-4 font-bold text-gray-700">User</label>
                <select id="UserId" name="UserId" autocomplete="UserId-name"
                    class=" focus:outline-none focus:ring-2 focus:ring-slate-800 w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md">
                    <option>United States</option>
                    <option>Panama</option>
                    <option>Chile</option>
                </select>
            </div>


            <div class="flex justify-end">
                <button type="button"
                    class="bg-white py-2 px-2 border border-gray-300 rounded-md shadow-sm font-bold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-800">Cancel</button>
                <button type="submit"
                    class="ml-3 inline-flex justify-center py-2 px-2 border border-transparent shadow-sm font-bold rounded-md text-white bg-slate-800 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-800">Save</button>
            </div>
        </form>
    </main>
</template>