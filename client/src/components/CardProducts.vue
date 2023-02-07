<script>
export default{
    props:['products'],
    methods:{

    },
    created(){
        console.log(this.products.name, "NAME");
    }
}
</script>

<template>

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
    <a href="#">
        <img class="p-8 rounded-t-lg object-scale-down h-48 w-96" :src="products.image_link" alt="product image" />
    </a>
    <div class="px-5 pb-5">   
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">{{ products.name }}</h5>
        <div class="flex items-center mt-2.5 mb-5">
           <h6>${{ products.price }}</h6>
        </div>
        <div class="flex items-center mt-2.5 mb-5">
           <h6>Brand: {{ products.brand }}</h6>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-black"></span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
    </div>
</div>

</template>