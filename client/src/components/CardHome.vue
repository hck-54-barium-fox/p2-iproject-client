<script>
export default {
props:['game'],
computed:{
    getContent(){
            return this.game.detailed_description?.length >100
            ? this.game.detailed_description.substring(0,100)+'...'
            : this.game.detailed_description
           } 
}
}
</script>
<template>
    <div class="col-3 my-3">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" :src="game.image" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{ game.name }}</h5>
                <p class="card-text">{{game.price}}</p>
                <p class="card-text">{{getContent}}</p>
                <button @click.prevent="this.$router.push(`/detailGames/${game.steam_appid}`)" class="btn btn-primary">Detail </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
body {
    height: 100%;
    background-image: url(https://img.freepik.com/free-vector/minimal-geometric-stripe-shape-background_1409-1014.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>