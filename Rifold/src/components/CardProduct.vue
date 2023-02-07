<script>
export default {
    props : ['el'],
    methods : {
        handleDetail(id) {
            this.$route.push(`/detail/${id}`)
        }
    }
}
</script>

<template>
 <div class="w-[300px] p-2 ml-12 mt-[200px]"> 
    <a href="#" class="block group">
  <img
    :src="el.imageUrl" style="height: 50%;"
    alt=""
    class="h-[350px] w-full object-cover sm:h-[450px]"
  />

  <div class="mt-3">
    <h3
      class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4"
    >
      {{ el.name }}
    </h3>
   <router-link :to='`/detail/${el.id}`'>  
   <button>
        <h3
      class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4"
    >
     see detail
    </h3>
    </button>
    </router-link>
    <h3
      class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4"
    >
      size : {{ el.size }}
    </h3>

    <p class="mt-1.5 max-w-[40ch] text-xs text-gray-500">
     price :  {{ el.price }}
    </p>
  </div>
</a>
</div>

</template>