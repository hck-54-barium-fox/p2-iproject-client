<script>
    export default{
        props: ['item']
    }
</script>

<template>
    <div class="col-md-3">
      <div class="card-sl">
        <div class="card-image">
          <img
            :src="item.imageUrl" />
        </div>
          <a class="card-action" href="#"><i class="fa fa-heart"></i></a>
          <div class="card-heading">
            {{ item.brand }}
          </div>
          <div class="card-text">
            {{ item.name }}
          </div>
          <div class="card-text">
            {{ item.price }}
          </div>
        <a href="#" class="card-button"> Purchase</a>
        <a href="#" class="card-button2"> Detail</a>
      </div>
    </div>
</template>