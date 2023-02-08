<script>
export default {
    props : ['product']
    
}
</script>


<template>
    <div class="col-sm-6">
                        <div class="card">
                            <img :src="product.imgUrl"
                                class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">{{product.name}}</h5>
                                <p class="card-text">{{product.description}}</p>
                                <a href="#" class="btn btn-success">Let's Plant</a>
                            </div>
                        </div>
                    </div>
</template>

<style scoped>

</style>