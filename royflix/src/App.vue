<script >
import Navbar from './components/Navbar.vue'
import { Disqus } from 'vue-disqus'


export default {
  components : {
    Navbar,
    Disqus
  },
  data: () => ({
    pageConfig: {
      title: 'My custom title',
      category_id: 'sports'
    }
  })
}



</script>

<template>
  <Navbar />
  <RouterView />
  
</template>
