<script>
export default {
    props: ["weapon"],
}

</script>

<template>
            <div class="col-md-3 pb-5 d-flex justify-content-center">
                <div class="card cb1 text-center" style="width: 18rem;">
                    <img :src="weapon.imageUrl" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">{{ weapon.name }}</h5>
                      <p>{{weapon.category}}</p>
                      <p class="card-text">{{ weapon.price.toLocaleString("id-ID", {style:"currency", currency:"IDR"}) }}</p>
                      <a @click.prevent="$router.push(`/weapons/${weapon.id}`)" href="#" class="btn btn-dark">See Details</a>
                    </div>
                  </div>
            </div>
</template>

<style scoped>

</style>
